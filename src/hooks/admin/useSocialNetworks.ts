import { useState } from "react";
import {
  useConfirm,
  useDeleteRequest,
  useMessage,
  useModal,
  usePatchRequest,
  usePostRequest,
} from "@/hooks";
import { SocialNetworksUrl } from "@/utils/urls";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocialNetworkScheme } from "@/utils/types.scheme";

export function useSocialNetworks() {
  const {
    open: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalCloseFn,
  } = useModal();
  const {
    open: isConfirmOpen,
    onOpen: onConfirmOpenFn,
    onClose: onConfirmCloseFn,
  } = useConfirm();
  const [isDelete, setIsDelete] = useState<number | null>(null);
  const [isEdit, setIsEdit] = useState<SocialNetworkScheme | null>(null);
  const { postRequest } = usePostRequest<SocialNetworkScheme>();
  const { patchRequest } = usePatchRequest<SocialNetworkScheme>();
  const { deleteRequest } = useDeleteRequest<SocialNetworkScheme>();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
    setValue,
  } = useForm<SocialNetworkScheme>();

  const onSubmit: SubmitHandler<SocialNetworkScheme> = async (event) => {
    if (isValid) {
      const { success } = isEdit
        ? await patchRequest(SocialNetworksUrl, { ...event, id: isEdit.id })
        : await postRequest(SocialNetworksUrl, event);

      if (success) {
        onModalClose();
        setMessage({
          variant: "success",
          message: `Social Network ${
            isEdit ? "Updated" : "Created"
          } successfully`,
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(SocialNetworksUrl, id);

    if (success) {
      onConfirmClose();
      setMessage({
        variant: "success",
        message: "Social Network Deleted successfully",
      });
    }
  };

  const onEdit = (data: SocialNetworkScheme) => {
    setFields(data);
    setIsEdit(data);
    onModalOpen();
  };

  const setFields = (data: SocialNetworkScheme) => {
    type keys = "icon" | "link";

    for (let key in data) {
      setValue(key as keys, data[key as keys]);
    }
  };

  const onModalClose = () => {
    reset();
    setIsEdit(null);
    onModalCloseFn();
  };

  const onConfirmOpen = (id: number) => {
    setIsDelete(id);
    onConfirmOpenFn();
  };

  const onConfirmClose = () => {
    setIsDelete(null);
    onConfirmCloseFn();
  };

  const onConfirm = () => {
    if (isDelete) {
      onDelete(isDelete);
    }
  };

  return {
    modal: {
      isModalOpen,
      onModalOpen,
      onModalClose,
    },
    confirm: {
      isConfirmOpen,
      onConfirmOpen,
      onConfirmClose,
      onConfirm,
    },
    isDelete,
    setIsDelete,
    isEdit,
    setIsEdit,
    message: { message, variant, isActive, setMessage },
    form: {
      register,
      handleSubmit,
      onSubmit,
      onEdit,
      onDelete,
      errors,
      isLoading,
      isValid,
    },
  };
}

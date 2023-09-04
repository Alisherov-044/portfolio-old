import { useState } from "react";
import {
  useConfirm,
  useDeleteRequest,
  useMessage,
  useModal,
  usePatchRequest,
  usePostRequest,
} from "@/hooks";
import { SpecificationsUrl } from "@/utils/urls";
import { SubmitHandler, useForm } from "react-hook-form";
import { SpecificationScheme } from "@/utils/types.scheme";

export function useSpecifications() {
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
  const [isEdit, setIsEdit] = useState<SpecificationScheme | null>(null);
  const { postRequest } = usePostRequest<SpecificationScheme>();
  const { patchRequest } = usePatchRequest<SpecificationScheme>();
  const { deleteRequest } = useDeleteRequest<SpecificationScheme>();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
    setValue,
  } = useForm<SpecificationScheme>();

  const onSubmit: SubmitHandler<SpecificationScheme> = async (event) => {
    if (isValid) {
      const { success } = isEdit
        ? await patchRequest(SpecificationsUrl, {
            ...event,
            id: isEdit.id,
          })
        : await postRequest(SpecificationsUrl, event);

      if (success) {
        onModalClose();
        setMessage({
          variant: "success",
          message: `Specification ${
            isEdit ? "Updated" : "Created"
          } successfully`,
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(SpecificationsUrl, id);

    if (success) {
      onConfirmClose();
      setMessage({
        variant: "success",
        message: "Specification Deleted successfully",
      });
    }
  };

  const onEdit = (data: SpecificationScheme) => {
    setFields(data);
    setIsEdit(data);
    onModalOpen();
  };

  const setFields = (data: SpecificationScheme) => {
    type keys = "title" | "description" | "color";

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

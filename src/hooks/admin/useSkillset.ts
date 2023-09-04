import { useState } from "react";
import {
  useConfirm,
  useDeleteRequest,
  useMessage,
  useModal,
  usePatchRequest,
  usePostRequest,
} from "@/hooks";
import { SkillsetUrl } from "@/utils/urls";
import { SubmitHandler, useForm } from "react-hook-form";
import { SkillSetScheme } from "@/utils/types.scheme";

export function useSkillset() {
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
  const [isEdit, setIsEdit] = useState<SkillSetScheme | null>(null);
  const { postRequest } = usePostRequest<SkillSetScheme>();
  const { patchRequest } = usePatchRequest<SkillSetScheme>();
  const { deleteRequest } = useDeleteRequest<SkillSetScheme>();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
    setValue,
  } = useForm<SkillSetScheme>();

  const onSubmit: SubmitHandler<SkillSetScheme> = async (event) => {
    if (isValid) {
      const { success } = isEdit
        ? await patchRequest(SkillsetUrl, { ...event, id: isEdit.id })
        : await postRequest(SkillsetUrl, event);

      if (success) {
        onModalClose();
        setMessage({
          variant: "success",
          message: `Skillset ${isEdit ? "Updated" : "Created"} successfully`,
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(SkillsetUrl, id);

    if (success) {
      onConfirmClose();
      setMessage({
        variant: "success",
        message: "Skillset Deleted successfully",
      });
    }
  };

  const onEdit = (data: SkillSetScheme) => {
    setFields(data);
    setIsEdit(data);
    onModalOpen();
  };

  const setFields = (data: SkillSetScheme) => {
    type keys = "title" | "icon" | "description" | "link";

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

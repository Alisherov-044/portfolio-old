import { useState } from "react";
import {
  useConfirm,
  useDeleteRequest,
  useMessage,
  useModal,
  usePatchRequest,
  usePostRequest,
} from "@/hooks";
import { ProjectsUrl } from "@/utils/urls";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProjectScheme } from "@/utils/types.scheme";

export function useProjects() {
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
  const [isEdit, setIsEdit] = useState<ProjectScheme | null>(null);
  const { postRequest } = usePostRequest<ProjectScheme>();
  const { patchRequest } = usePatchRequest<ProjectScheme>();
  const { deleteRequest } = useDeleteRequest<ProjectScheme>();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
    setValue,
  } = useForm<ProjectScheme>();

  const onSubmit: SubmitHandler<ProjectScheme> = async (event) => {
    if (isValid) {
      const { success } = isEdit
        ? await patchRequest(ProjectsUrl, { ...event, id: isEdit.id })
        : await postRequest(ProjectsUrl, event);

      if (success) {
        onModalClose();
        setMessage({
          variant: "success",
          message: `Project ${isEdit ? "Updated" : "Created"} successfully`,
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(ProjectsUrl, id);

    if (success) {
      onConfirmClose();
      setMessage({
        variant: "success",
        message: "Project Deleted successfully",
      });
    }
  };

  const onEdit = (data: ProjectScheme) => {
    setFields(data);
    setIsEdit(data);
    onModalOpen();
  };

  const setFields = (data: ProjectScheme) => {
    type keys = "link" | "title" | "description" | "image";

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

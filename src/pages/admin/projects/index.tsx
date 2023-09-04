import { Layout, Section } from "@/layouts";
import { useProjects } from "@/hooks/admin";
import { useProjectsContext } from "@/context";
import { Button, Confirm, Form, FormGroup, Message, Modal } from "@/components";
import { Project } from "@/components/admin";

export default function ProjectsAdmin() {
  const { projects } = useProjectsContext();
  const {
    modal: { isModalOpen, onModalOpen, onModalClose },
    confirm: { isConfirmOpen, onConfirmOpen, onConfirmClose, onConfirm },
    form: { handleSubmit, onSubmit, onEdit, isLoading, register },
    message: { isActive, message, variant },
  } = useProjects();

  return (
    <Layout>
      <Section>
        <Message isActive={isActive} variant={variant} message={message} />
        <Confirm
          title="Are you sure to delete this Project?"
          open={isConfirmOpen}
          onClose={onConfirmClose}
          onConfirm={onConfirm}
        />
        <Button
          variant="secondary"
          className="mb-6 w-fit"
          onClick={onModalOpen}
        >
          Add new Projects
        </Button>
        <div className="content__wrapper">
          {projects.map((project) => (
            <Project
              project={project}
              onDelete={onConfirmOpen}
              onEdit={onEdit}
              key={project.id}
            />
          ))}
        </div>
        <Modal open={isModalOpen} onClose={onModalClose}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="admin-form">
              <FormGroup
                id="title"
                label="Title"
                register={register("title")}
              />
              <FormGroup id="link" label="Link" register={register("link")} />
              <FormGroup
                id="image"
                label="Image"
                register={register("image")}
              />
              <FormGroup
                id="description"
                label="Description"
                register={register("description")}
                textarea
              />
            </div>
            <Button
              variant="secondary"
              className="admin-form--button"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "...wait" : "Submit"}
            </Button>
          </Form>
        </Modal>
      </Section>
    </Layout>
  );
}

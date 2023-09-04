import { Layout, Section } from "@/layouts";
import { useSpecifications } from "@/hooks/admin";
import { useSpecificationsContext } from "@/context";
import { Button, Confirm, Form, FormGroup, Message, Modal } from "@/components";
import { Specification } from "@/components/admin";

export default function SpecificationsAdmin() {
  const { specifications } = useSpecificationsContext();
  const {
    modal: { isModalOpen, onModalOpen, onModalClose },
    confirm: { isConfirmOpen, onConfirmOpen, onConfirmClose, onConfirm },
    form: { handleSubmit, onSubmit, onEdit, isLoading, register },
    message: { isActive, message, variant },
  } = useSpecifications();

  return (
    <Layout>
      <Section>
        <Message isActive={isActive} variant={variant} message={message} />
        <Confirm
          title="Are you sure to delete this Specification?"
          open={isConfirmOpen}
          onClose={onConfirmClose}
          onConfirm={onConfirm}
        />
        <Button
          variant="secondary"
          className="mb-6 w-fit"
          onClick={onModalOpen}
        >
          Add new Specifications
        </Button>
        <div className="content__wrapper">
          {specifications.map((specification) => (
            <Specification
              specification={specification}
              onDelete={onConfirmOpen}
              onEdit={onEdit}
              key={specification.id}
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
              <FormGroup
                id="color"
                label="Color"
                register={register("color")}
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

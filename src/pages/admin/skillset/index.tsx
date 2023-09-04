import { Layout, Section } from "@/layouts";
import { useSkillset } from "@/hooks/admin";
import { useSkillsetContext } from "@/context";
import { Button, Confirm, Form, FormGroup, Message, Modal } from "@/components";
import { Skillset } from "@/components/admin";

export default function SpecificationsAdmin() {
  const { skills } = useSkillsetContext();
  const {
    modal: { isModalOpen, onModalOpen, onModalClose },
    confirm: { isConfirmOpen, onConfirmOpen, onConfirmClose, onConfirm },
    form: { handleSubmit, onSubmit, onEdit, isLoading, register },
    message: { isActive, message, variant },
  } = useSkillset();

  return (
    <Layout>
      <Section>
        <Message isActive={isActive} variant={variant} message={message} />
        <Confirm
          title="Are you sure to delete this Skillset?"
          open={isConfirmOpen}
          onClose={onConfirmClose}
          onConfirm={onConfirm}
        />
        <Button
          variant="secondary"
          className="mb-6 w-fit"
          onClick={onModalOpen}
        >
          Add new Skillsets
        </Button>
        <div className="content__wrapper">
          {skills.map((skill) => (
            <Skillset
              skill={skill}
              onDelete={onConfirmOpen}
              onEdit={onEdit}
              key={skill.id}
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
                id="icon"
                label="Icon"
                register={register("icon")}
                textarea
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

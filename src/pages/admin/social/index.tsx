import { Layout, Section } from "@/layouts";
import { useSocialNetworks } from "@/hooks/admin";
import { useSocialNetworksContext } from "@/context";
import { Button, Confirm, Form, FormGroup, Message, Modal } from "@/components";
import { SocialNetwork } from "@/components/admin";

export default function SocialNetworksAdmin() {
  const { socialNetworks } = useSocialNetworksContext();
  const {
    modal: { isModalOpen, onModalOpen, onModalClose },
    confirm: { isConfirmOpen, onConfirmOpen, onConfirmClose, onConfirm },
    form: { handleSubmit, onSubmit, onEdit, isLoading, register },
    message: { isActive, message, variant },
  } = useSocialNetworks();

  return (
    <Layout>
      <Section>
        <Message isActive={isActive} variant={variant} message={message} />
        <Confirm
          title="Are you sure to delete this SocialNetwork?"
          open={isConfirmOpen}
          onClose={onConfirmClose}
          onConfirm={onConfirm}
        />
        <Button
          variant="secondary"
          className="mb-6 w-fit"
          onClick={onModalOpen}
        >
          Add new SocialNetworks
        </Button>
        <div className="content__wrapper">
          {socialNetworks.map((socialNetwork) => (
            <SocialNetwork
              socialNetwork={socialNetwork}
              onDelete={onConfirmOpen}
              onEdit={onEdit}
              key={socialNetwork.id}
            />
          ))}
        </div>
        <Modal open={isModalOpen} onClose={onModalClose}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="admin-form">
              <FormGroup id="link" label="Link" register={register("link")} />
              <FormGroup
                id="icon"
                label="Icon"
                register={register("icon")}
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

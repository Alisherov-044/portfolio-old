import { Section } from "@/layouts";
import { Button, Form, FormGroup } from "@/components";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let's talk business"
      description="Now that you know a lot about me, let me know if you are interested to work with me."
      className="contact__section"
      sm
    >
      <Form className="contact__form" onSubmit={() => {}}>
        <FormGroup id="name" label="Name" />
        <FormGroup id="email" label="Email address" />
        <FormGroup id="description" label="Description" textarea />
        <Button variant="primary" className="contact__form--button">
          Let's get started
        </Button>
      </Form>
    </Section>
  );
}

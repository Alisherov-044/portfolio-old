import { Section } from "@/layouts";
import { Button, Form, FormGroup, Message } from "@/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactMessageInterface } from "@/utils/types";
import { useMessage } from "@/hooks";

export function Contact() {
  const { handleSubmit, register, reset } = useForm<ContactMessageInterface>();
  const { isActive, message, setMessage, variant } = useMessage();

  const onSubmit: SubmitHandler<ContactMessageInterface> = (event) => {
    if (event) {
      let message = `name: ${event.name} 
      email: ${event.email} 
      description: ${event.description}`;

      let token = "5626317023:AAGnKSVpx69mi7u1FI23XokKvq6i22OWXUY";
      let chat_id = 5193911535;
      let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

      fetch(url);
      setMessage({ variant: "success", message: "Message sent" });
    }
    reset();
  };

  return (
    <Section
      id="contact"
      title="Let's talk business"
      description="Now that you know a lot about me, let me know if you are interested to work with me."
      className="contact__section"
      sm
    >
      <Message isActive={isActive} variant={variant} message={message} />
      <Form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          id="name"
          label="Name"
          register={register("name", { required: "This field is required" })}
        />
        <FormGroup
          id="email"
          label="Email address"
          register={register("email", { required: "This field is required" })}
        />
        <FormGroup
          id="description"
          label="Description"
          register={register("description", {
            required: "This field is required",
          })}
          textarea
        />
        <Button variant="primary" className="contact__form--button">
          {`Let's get started`}
        </Button>
      </Form>
    </Section>
  );
}

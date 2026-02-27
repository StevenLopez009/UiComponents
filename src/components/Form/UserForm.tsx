import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  defaultValues,
  UserSchema,
  type UserSchemaType,
} from "../../schemas/UserSchema";
import FormController from "./FormController";

const UserForm = () => {
  const methods = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormController<UserSchemaType>
          name="name"
          label="Nombre"
          placeholder="Ingrese su nombre"
        />

        <FormController<UserSchemaType>
          name="email"
          label="Email"
          placeholder="Ingrese su email"
        />
        <FormController<UserSchemaType>
          name="password"
          label="Contraseña"
          placeholder="Ingrese su contraseña"
        />

        <FormController<UserSchemaType>
          name="confirmPassword"
          label="Confirmar Contraseña"
          placeholder="Confirme su contraseña"
        />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
};

export default UserForm;

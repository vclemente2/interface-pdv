import InputText from "../InputText";
import StyledForm from "../StyledForm";

export default function LoginForm() {
  return (
    <StyledForm>
      <InputText label="E-mail" type="email" />
      <InputText label="Senha" type="password" />
    </StyledForm>
  );
}

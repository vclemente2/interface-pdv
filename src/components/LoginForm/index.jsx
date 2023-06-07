import InputText from "../InputText";
import StyledForm from "../StyledForm";

export default function LoginForm() {
  return (
    <StyledForm>
      <InputText identificador="emailLogin" type="email">
        E-mail
      </InputText>
      <InputText identificador="senha" type="password">
        Senha
      </InputText>
    </StyledForm>
  );
}

import imgHome from "../../assets/images/sistema-de-frente-de-loja_logo_novo.png";
import LinkButton from "../../components/LinkButton";

export default function Home() {
  return (
    <>
      <h1>Bem-vindo(a) ao Store Front PDV</h1>
      <img src={imgHome} alt="Imagem da página inicial" />
      <br />
      <LinkButton to="/login">Efetue o seu Login</LinkButton>
      <br />
      <br />
      <LinkButton to="/register">Cadastra-se</LinkButton>
    </>
  );
}

export default function InputText({ identificador, children, type }) {
  return (
    <>
      <label htmlFor={identificador}>{children}</label>
      <input id={identificador} type={type} />
    </>
  );
}

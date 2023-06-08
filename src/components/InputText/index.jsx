import { v4 as uuid } from "uuid";

export default function InputText({ label, type }) {
  const id = uuid();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </>
  );
}

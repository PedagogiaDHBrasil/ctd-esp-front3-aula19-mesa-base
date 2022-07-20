import React from "react";
import Name from "../Forms/name";
import Email from "../Forms/Email";

const Form = () => {
  return (
    <form>
      <Name />
      <Email />
      <button type="submit">Inscrever-se</button>
      <button onClick={() => {}}>Limpar campos</button>
    </form>
  );
};

export default Form;

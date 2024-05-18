import Button from "../../Atoms/Button/Button";
import Placeholder from "../../Atoms/Placeholder/Placeholder";
import Title from "../../Atoms/Title/Title";

export interface IAgeRegister {}

const AgeRegister: React.FC<IAgeRegister> = ({}) => {
  return (
    <>
      <Title sampleTextProp="Ingresa tu edad" size="20px" />
      <Placeholder sampleTextProp="Hello world!" border="2px solid black" />
      <Button color="skyblue" sampleTextProp="Continuar" />
    </>
  );
};

export default AgeRegister;

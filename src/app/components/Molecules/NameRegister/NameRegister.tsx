import Button from "../../Atoms/Button/Button";
import Placeholder from "../../Atoms/Placeholder/Placeholder";
import Title from "../../Atoms/Title/Title";

export interface INameRegister {}

const NameRegister: React.FC<INameRegister> = ({}) => {
  return (
    <>
      <Title sampleTextProp="Ingresa tu nombre" size="20px" />
      <Placeholder sampleTextProp="Hello world!" border="2px solid black" />
      <Button color="skyblue" sampleTextProp="Continuar" />
    </>
  );
};

export default NameRegister;

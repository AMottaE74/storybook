import Title from "../../Atoms/Title/Title";
import AgeRegister from "../../Molecules/AgeRegister/AgeRegister";
import NameRegister from "../../Molecules/NameRegister/NameRegister";

export interface IDataRegister {}

const DataRegister: React.FC<IDataRegister> = ({}) => {
  return (
    <>
      <Title sampleTextProp="Data Register" size="40px" />
      <NameRegister />
      <AgeRegister />
    </>
  );
};

export default DataRegister;

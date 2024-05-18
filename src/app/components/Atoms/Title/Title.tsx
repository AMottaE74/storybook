export interface ITitle {
  sampleTextProp: string;
  size: string;
}

const Title: React.FC<ITitle> = ({ sampleTextProp, size }) => {
  return (
    <h1 style={{ fontSize: size }} className="">
      {sampleTextProp}
    </h1>
  );
};

export default Title;

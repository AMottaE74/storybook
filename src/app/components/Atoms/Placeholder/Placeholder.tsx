export interface IPlaceholder {
  sampleTextProp: string;
  border: string;
}

const Placeholder: React.FC<IPlaceholder> = ({ sampleTextProp, border }) => {
  return (
    <input
      style={{ border: border }}
      className=""
      type="text"
      name="name"
      required
    />
  );
};

export default Placeholder;

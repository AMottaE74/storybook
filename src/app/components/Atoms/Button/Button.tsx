export interface IButton {
  sampleTextProp: string;
  color: string;
}

const Button: React.FC<IButton> = ({ sampleTextProp, color }) => {
  return (
    <div className="">
      <button style={{ backgroundColor: color }}>{sampleTextProp}</button>
    </div>
  );
};

export default Button;

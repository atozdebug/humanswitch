import ControlPointIcon from "@mui/icons-material/ControlPoint";

const CreateButton = ({ onClick, className, text }: any) => {
  return (
    <button
      onClick={onClick}
      className={`${className} py-10px px-18px bg-darkblue3 rounded-lg text-white flex justify-center gap-2 items-center`}
    >
      <ControlPointIcon />
      {text}
    </button>
  );
};

export default CreateButton;

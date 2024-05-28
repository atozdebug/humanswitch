import ControlPointIcon from "@mui/icons-material/ControlPoint";

const CreateButton = ({ onClick, className, text }: any) => {
  return (
    <button
      onClick={onClick}
      className={`${className} p-2 bg-blue-800 rounded-lg text-white flex justify-center gap-2 items-center`}
    >
      <ControlPointIcon />
      {text}
    </button>
  );
};

export default CreateButton;

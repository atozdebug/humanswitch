import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface CommonProps {
  hidden?: boolean;
}

export interface VisibleProps extends CommonProps {
  path: string;
  route: string;
  hidden?: false;
}

export interface HiddenProps extends CommonProps {
  path?: undefined;
  route?: undefined;
  hidden: true;
}

type BackButtonProps = VisibleProps | HiddenProps;

const BackButton: React.FC<BackButtonProps> = props => {
  if (props.hidden) {
    return null; // Render nothing if hidden is true
  }

  return (
    <Link to={props.route}>
      <div className="flex gap-2 w-full text-gray-dark border rounded-lg px-4 items-center font-medium py-1 text-sm">
        <RiArrowGoBackLine />
        <span className="font-medium">Back to {props.path}</span>
      </div>
    </Link>
  );
};

export default BackButton;

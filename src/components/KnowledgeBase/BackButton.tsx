import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface BackProps {
  path: string;
  route: string;
}

const BackButton: React.FC<BackProps> = ({ path, route }) => {
  return (
    <Link to={route}>
      <div className="flex gap-2 text-gray-dark border rounded-lg px-4 items-center font-medium py-1 text-sm">
        <RiArrowGoBackLine />
        <span className="font-medium">Back to {path}</span>
      </div>
    </Link>
  );
};

export default BackButton;

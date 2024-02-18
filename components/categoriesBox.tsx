import React from "react";

interface CategoriesBoxInterface {
  label: string;
  icon: any;
  description: string;
}

const CategoriesBox: React.FC<CategoriesBoxInterface> = ({
  label,
  icon: Icon,
  description,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center border-b-2 border-transparent text-neutral-400 hover:border-neutral-600 transition cursor-pointer duration-300">
      <Icon size={30} />
      <p>{label}</p>
    </div>
  );
};

export default CategoriesBox;

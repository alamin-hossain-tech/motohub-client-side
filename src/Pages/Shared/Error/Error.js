import React from "react";

const Error = ({ title }) => {
  return (
    <div className="h-[60vh] flex items-center justify-center">
      <h2 className="text-red-600 font-bold text-4xl">{title}</h2>
    </div>
  );
};

export default Error;

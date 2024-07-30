import { Spinner } from "@nextui-org/react";
import React from "react";

const LoadSpinner = () => {
  return (
    <div>
      <div className="flex gap-4 mt-12">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="sm" />
        <Spinner size="md" />
      </div>
    </div>
  );
};

export default LoadSpinner;

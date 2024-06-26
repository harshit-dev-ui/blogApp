import React, { useId } from "react";

function Input({ label, type = "text", classname = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor="{id}">{label}</label>}
      <input type={type} ref={ref} {...props} id={id} />
    </div>
  );
}

export default React.forwardRef(Input);

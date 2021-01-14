import React, { useEffect, useRef, useState } from "react";

function AddImage({ value }) {
  const inputRef = useRef(null);
  useEffect(() => (value ? (inputRef.current.files = value) : null));
  return (
    <div className="input-con">
      <label>Images</label>
      <input
        accept=".jpg,.png,.svg"
        size="500"
        type="file"
        multiple
        name="images"
        ref={inputRef}
      />
    </div>
  );
}

export default AddImage;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images as cacheImages } from "../../../model/store/preview";
import norvasc from "../../../res/images/drug.jpg";
function AddImage({ value, images }) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => value && (inputRef.current.files = value));
  const state = useSelector((state) => state.entities.preview.images);
  const [addedImages, setAddedImages] = useState(state);
  const handleAddImage = (e) => {
    const imageFiles = [];
    for (var file of e.target.files) imageFiles.push(file);
    dispatch(cacheImages({ images: imageFiles }));
  };
  console.log(state, addedImages);
  return (
    <div className="input-con">
      <label>Images </label>
      <div className="custom-con">
        <div className="custom-input">
          <p className="add-image">Add Image</p>
          <p className="add-images"> {value.length}</p>
        </div>
        <input
          onChange={handleAddImage}
          accept=".jpg,.png,.svg"
          size="500"
          type="file"
          multiple
          name="images"
          ref={inputRef}
        />
      </div>

      <div className="add-image-con">
        {state.map((image) => {
          console.log(Array.isArray(image));
          return (
            <div className="add-image-card">
              <img src={URL.createObjectURL(image)} alt="" />
              <p>
                <i className="far fa-window-close fa-lg"></i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddImage;

//https://git.heroku.com/jumgamarzz.git

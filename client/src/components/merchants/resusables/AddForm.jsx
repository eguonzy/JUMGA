import React, { useRef } from "react";
import { useSelector } from "react-redux";
import AddImage from "./AddImage";
import CategoryInput from "./CategoryInput";
import Input from "./Input";
import TextField from "./TextField";

function AddForm({ onSubmit, history }) {
  const formRef = useRef(null);
  const {
    name,
    price,
    quantity,
    manufacturer,
    imageForm,
    description,
    images,
  } = useSelector((state) => state.entities.preview);
  return (
    <form
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="add-form"
      ref={formRef}
    >
      <Input
        type="text"
        name="name"
        label="Name"
        id="name"
        placeholder="Nokia Headphones"
        value={name}
      />
      <CategoryInput />
      <Input name="quantity" value={quantity} label="Quantity" type="number" />
      <Input name="price" value={price} label="Price" type="number" />
      <Input
        type="text"
        name="manufacturer"
        label="Manufacturer"
        value={manufacturer}
        placeholder="Nokia"
      />

      <TextField value={description} label="Description" />
      <AddImage value={imageForm} images={images} />
      <Input type="submit" value="Add Item" />
    </form>
  );
}

export default AddForm;

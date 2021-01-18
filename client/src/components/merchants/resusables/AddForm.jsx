import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { view } from "../../../model/store/preview";
import AddImage from "./AddImage";
import CategoryInput from "./CategoryInput";
import Input from "./Input";
import TextField from "./TextField";

function AddForm({ onSubmit, history }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const {
    name,
    price,
    quantity,
    manufacturer,
    imageForm,
    description,
    images,
  } = useSelector((state) => state.entities.preview);
  const handlePreview = async () => {
    const form = formRef.current;
    const images = [];
    for (const file of form.images.files) {
      delete file.lastModifiedDate;
      delete file.lastModified;
      images.push(file);
    }
    await dispatch(
      view({
        name: form.name.value,

        description: form.description.value,
        quantity: form.quantity.value,
        price: form.price.value,
        manufacturer: form.manufacturer.value,
        imageForm: form.images.files,
        images,
      })
    );
    console.log(images);
    history.push("/merchant/preview");
  };
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

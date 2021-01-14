import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { view } from "../../../model/store/preview";
import AddImage from "./AddImage";
import DateBox from "./DateBox";
import Input from "./Input";
import Select from "./Select";
import TextField from "./TextField";

function AddForm({ onSubmit, history }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const {
    brand,
    generic,
    images,
    strength,
    formulation,
    price,
    manufacture_date,
    expiry_date,
    packsize,
    quantity,
    company,
    drug_class,
    nafdac,
    imageForm,
    description,
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
        brand: form.brand.value,
        generic: form.generic.value,
        strength: form.strength.value,
        formulation: form.formulation.value,
        drug_class: form.drug_class.value,
        description: form.description.value,
        expiry_date: form.expiry_date.value,
        manufacture_date: form.manufacture_date.value,
        packsize: form.packsize.value,
        quantity: form.quantity.value,
        nafdac: form.nafdac.value,
        price: form.price.value,
        company: form.company.value,
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
        name="brand"
        label="Brand Name"
        id="brand_name"
        placeholder="e.g Augmentin"
        value={brand}
      />
      <Input
        type="text"
        name="generic"
        placeholder="e.g Amoxicillin + Clavulanic acid"
        label="Generic Name"
        id="generic_name"
        value={generic}
      />
      <Input
        type="text"
        name="strength"
        placeholder="625mg"
        label="Strength"
        value={strength}
      />
      <Select
        type="text"
        name="formulation"
        label="Formulation"
        group={true}
        id="formulation"
        value={formulation}
        options={[
          { option: "Syrup", value: "Syrup", oral: true },
          { option: "Capsule ", value: "Capsule ", oral: true },
          { option: "Tablet ", value: "Tablet ", oral: true },
          { option: "Powder ", value: "Powder ", external: true },
          { option: "Cream ", value: "Cream ", external: true },
          { option: "Ointment ", value: "Ointment ", external: true },
          { option: "Paste ", value: "Paste " },
          { option: "Suppository ", value: "Suppository ", insert: true },
          { option: "Pessary ", value: "Pessary ", insert: true },
          { option: "Paint", value: "Paint", external: true },
          { option: "Eye Drop", value: "Eye Drop", drop: true },
          { option: "Ear Drop", value: "Ear Drop", drop: true },
          { option: "Nose Drop", value: "Nose Drop", drop: true },
          { option: "Spray", value: "Spray", spray: true },
          { option: "Nebule", value: "Nebule", misc: true },
          { option: "Consumable", value: "Consumable", misc: true },
          { option: "Pen", value: "Pen" },
        ].sort((a, b) =>
          a.option > b.option ? 1 : a.option < b.option ? -1 : 0
        )}
      />
      <Select
        label="Class"
        name="drug_class"
        value={drug_class}
        options={[
          { option: "Antibiotic", value: "antibiotic" },
          {
            option: "Antihelmintic (Worm killer/expeller)",
            value: "antihelmintic",
          },
          {
            option: "Antihypertensive (BP Drug/Hypertension drug)",
            value: "antihypertensive",
          },
          {
            option: "Antifungal",
            value: "antifungal",
          },
          {
            option: "Analgesic (Drug for pain)",
            value: "analgesic",
          },
          {
            option: "Anticoagulant/Antiplatelet (drug)",
            value: "antihypertensive",
          },
        ].sort((a, b) =>
          a.option > b.option ? 1 : a.option < b.option ? -1 : 0
        )}
      />
      <Input
        name="packsize"
        placeholder="14"
        value={packsize}
        label="Packsize"
        type="number"
      />
      <Input name="quantity" value={quantity} label="Quantity" type="number" />
      <Input name="price" value={price} label="Price" type="number" />
      <Input
        type="text"
        name="company"
        label="Company"
        value={company}
        placeholder="GSK"
      />
      <Input
        type="text"
        label="Nafdac Number"
        name="nafdac"
        placeholder="234dcf"
        value={nafdac}
      />
      <DateBox values={{ expiry_date, manufacture_date }} />

      <TextField value={description} label="Description" />
      <AddImage value={imageForm} />
      <Input type="submit" value="Add Item" />
      <div onClick={handlePreview} className="preview">
        <i className="fa fa-eye fa-lg"></i>
      </div>
    </form>
  );
}

export default AddForm;

import React, { useState } from "react";

function Select({ label, name, value, options, group, external }) {
  const [selectState, setSelectState] = useState(value);
  const handleSelect = (e) => setSelectState(e.target.value);
  return (
    <div className="input-con">
      <label>{label}</label>
      <select onChange={handleSelect} value={selectState} name={name}>
        {group && (
          <optgroup label="Ampoule">
            <option value="ampoule/im">Intramuscular (IM)</option>
            <option value="ampoule/im/iv">
              Intramuscular/Intravenous (IM/IV)
            </option>
            <option value="ampoule/is">Intraspinal (IS)</option>
            <option value="ampoule/iv">Intravenous (IV)</option>
            <option value="ampoule/sc">Subcutaneous(SC)</option>
          </optgroup>
        )}
        {group && (
          <>
            <optgroup label="Drop">
              {options.map(
                (option) =>
                  option.drop && (
                    <option key={option.option} value={option.value}>
                      {option.option}
                    </option>
                  )
              )}
            </optgroup>
            <optgroup label="External Application">
              {options.map(
                (option) =>
                  option.external && (
                    <option key={option.option} value={option.value}>
                      {option.option}
                    </option>
                  )
              )}
            </optgroup>
            <optgroup label="Insert">
              {options.map(
                (option) =>
                  option.insert && (
                    <option key={option.option} value={option.value}>
                      {option.option}
                    </option>
                  )
              )}
            </optgroup>
            <optgroup label="Oral">
              {options.map(
                (option) =>
                  option.oral && (
                    <option key={option.option} value={option.value}>
                      {option.option}
                    </option>
                  )
              )}
            </optgroup>
          </>
        )}

        {!group &&
          options.map((option) => (
            <option key={option.option} value={option.value.toUppercase}>
              {option.option}
            </option>
          ))}
        {group && (
          <optgroup label="Vial">
            <option value="vial/im">Intramuscular (IM)</option>
            <option value="vial/im/iv">
              Intramuscular/Intravenous (IM/IV)
            </option>
            <option value="vial/is">Intraspinal (IS)</option>
            <option value="vial/iv">Intravenous (IV)</option>
            <option value="vial/sc">Subcutaneous(SC)</option>
          </optgroup>
        )}
      </select>
    </div>
  );
}

export default Select;

import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const fieldType = {
  Text: "text",
  Select: "select",
  Textarea: "textarea",
  Radio: "radio",
};

// const field = {
//   key:
//   label:
//   default:
//   required
// }

export default function Form({ setting = [] }) {
  const createInitVal = (setting = []) => {
    const initVal = setting.reduce((acc, field) => {
      return { ...acc, [field.key]: field.default && null };
    }, {});
    return initVal;
  };
  const [dataCache, setCache] = useState(() => createInitVal(setting));

  const onFieldChange = (event, key) => {
    const { target } = event;
    setCache((prev) => ({
      ...prev,
      [key]: target.value,
    }));
  };

  const renderField = (setting = []) => {
    const fieldList = setting.map((field) => {
      switch (field.type) {
        case fieldType.Text:
          return (
            <TextField
              onChange={(event) => onFieldChange(event, field.key)}
              value={dataCache[field.key]}
              label={field.label || field.key}
              key={field.key}
            />
          );
        case fieldType.Select:
          return;
        case fieldType.Radio:
          return;
        case fieldType.Textarea:
          return;
        default:
          return null;
      }
    });
    return fieldList;
  };

  return (
    <form>
      <FormControl>
        {/* <FormGroup></FormGroup> */}
        {renderField(setting)}
      </FormControl>
    </form>
  );
}

Form.propTypes = {
  setting: PropTypes.array.isRequired,
};

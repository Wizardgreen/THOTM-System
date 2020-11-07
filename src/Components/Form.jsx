import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Select from "./Select";
import TextField from "./TextField";
import DatePicker from "./DatePicker";
import Switch from "./Switch";
import Checkbox from "./Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import useI18n from "utils/useI18n";
import { chain } from "utils/lodash";

export const Field = {
  Text: "text",
  Select: "select",
  Textarea: "textarea",
  Radio: "radio",
  Date: "date",
  Switch: "switch",
  Checkbox: "checkbox",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > .MuiTextField-root,& > .MuiFormGroup-root": {
      margin: theme.spacing(1),
    },
  },
  "cellSize-1": {
    width: "100px",
  },
  "cellSize-2": {
    width: "200px",
  },
  "cellSize-3": {
    width: "300px",
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    "& > button": {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
  },
}));

const createInitVal = (setting = []) => {
  const initVal = setting.reduce((acc, field) => {
    const defaultVal =
      field.default ||
      (() => {
        switch (field.type) {
          case Field.Text:
          case Field.Textarea:
          case Field.Select:
            return "";
          case Field.Date:
            return null;
          case Field.Checkbox:
          case Field.Switch:
            return false;
          default:
            return new Error(Field.type, "not exist,or no type");
        }
      })();
    return { ...acc, [field.key]: defaultVal };
  }, {});
  return initVal;
};

export default function Form({
  className,
  setting = [],
  disableBtn = false,
  onConfirm = null,
  confirmBtnText = "confirm",
  onCancel = null,
  cancelBtnText = "cancel",
  defaultData = null,
}) {
  const classes = useStyles();
  const [dataCache, setCache] = useState(() =>
    defaultData ? defaultData : createInitVal(setting)
  );

  const i18n = useI18n({
    ...chain(setting).keyBy("key").mapValues("label").value(),
    confirm: confirmBtnText,
    cancel: cancelBtnText,
  });

  const onFieldChange = (value, key) => {
    setCache((prev) => ({ ...prev, [key]: value }));
  };
  const handleConfirm = () => {
    onConfirm(dataCache);
  };
  const handleCancel = () => {
    onCancel(dataCache);
  };

  const renderField = () => {
    const fieldList = setting.map(
      ({ label, type, key, fullWidth = false, option, cellSize = null }) => {
        const passingClass = cellSize ? classes[`cellSize-${cellSize}`] : "";
        switch (type) {
          case Field.Text:
            return (
              <TextField
                passingClass={passingClass}
                onChange={(value) => onFieldChange(value, key)}
                value={dataCache[key]}
                label={label}
                fullWidth={fullWidth}
                key={key}
              />
            );
          case Field.Select:
            return (
              <Select
                passingClass={passingClass}
                onChange={(value) => onFieldChange(value, key)}
                value={dataCache[key]}
                option={option}
                label={i18n[key]}
                fullWidth={fullWidth}
                key={key}
              />
            );
          // case Field.Radio:
          //   return;
          case Field.Switch:
            return (
              <Switch
                onChange={(value) => onFieldChange(value, key)}
                checked={dataCache[key]}
                label={i18n[key]}
                key={key}
              />
            );
          case Field.Checkbox:
            return (
              <Checkbox
                onChange={(value) => onFieldChange(value, key)}
                checked={dataCache[key]}
                label={i18n[key]}
                key={key}
              />
            );
          case Field.Date:
            return (
              <DatePicker
                passingClass={passingClass}
                onChange={(value) => onFieldChange(value, key)}
                value={dataCache[key]}
                label={i18n[key]}
                fullWidth={fullWidth}
                key={key}
              />
            );
          case Field.Textarea:
            return (
              <TextField
                passingClass={passingClass}
                onChange={(value) => onFieldChange(value, key)}
                value={dataCache[key]}
                label={i18n[key]}
                fullWidth={fullWidth || false}
                multiline
                key={key}
              />
            );
          default:
            return null;
        }
      }
    );
    return fieldList;
  };

  return (
    <form className={`${classes.root} ${className}`}>
      {renderField()}
      {disableBtn === false && (
        <div className={classes.btnWrapper}>
          {onCancel && (
            <Button onClick={handleCancel} variant="contained">
              {i18n.cancel}
            </Button>
          )}
          {onConfirm && (
            <Button onClick={handleConfirm} variant="contained" color="primary">
              {i18n.confirm}
            </Button>
          )}
        </div>
      )}
    </form>
  );
}

Form.propTypes = {
  setting: PropTypes.array.isRequired,
  disableBtn: PropTypes.bool,
  onConfirm: PropTypes.func,
  confirmBtnText: PropTypes.string,
  onCancel: PropTypes.func,
  cancelBtnText: PropTypes.string,
};

import { isNull } from "lodash";
import { useTranslation } from "react-i18next";
import { isArray, isString, isPlainObject, isEmpty, mapValues } from "./lodash";
/**
 * @param {string | array | object} args - object do not support nesting
 * @return {string | object}
 */

const formatArray = (array, t) => array.map((arg) => t(arg)).join("");
const formatString = (string, t) => t(string);
const formatObject = (object, t) => {
  return mapValues(object, (value) => {
    if (isArray(value)) return formatArray(value, t);
    if (isString(value)) return formatString(value, t);
  });
};

export default function useI18n(args) {
  const { t } = useTranslation();
  if (isArray(args)) return formatArray(args, t);
  if (isString(args)) return formatString(args, t);
  if (isPlainObject(args) && !isEmpty(args)) return formatObject(args, t);
  return null;
}

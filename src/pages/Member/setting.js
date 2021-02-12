import program from "assets/maps/program";
import { Cell } from "components/Table";
import { Field } from "components/Form";

export const userStructure = {
  birthday: "",
  city: "",
  email: "",
  expiryDate: "",
  game: {},
  hasCard: "",
  id: "",
  joinDate: "",
  journeyBeing: "",
  lineId: "",
  name: "",
  nickname: "",
  note: "",
  phone: "",
  program: "",
  storage: "",
};

export const tableHeader = [
  "id",
  "name",
  "nickname",
  "lineId",
  "program",
  "storage",
  "programExpiryDate",
  "note",
  "view",
].map((name) => {
  const set = {
    name,
    label: `i18n_${name}`,
  };
  if (name === "program") {
    set.type = Cell.Text;
    set.map = program;
  } else if (name === "view") {
    set.type = Cell.Link;
    set.text = `i18n_${name}`;
    set.path = ({ id }) => `member/${id}`;
  } else {
    set.type = Cell.Text;
  }
  return set;
});

export const formSetting = [
  { key: "name", type: Field.Text, label: "name" },
  { key: "nickname", type: Field.Text, label: "nickname" },
  { key: "birthday", type: Field.Date, label: "birthday" },
  { key: "city", type: Field.Text, label: "city" },
  { key: "lineId", type: Field.Text, label: "lineId" },
  { key: "phone", type: Field.Text, label: "phone" },
  {
    key: "email",
    type: Field.Text,
    fullWidth: true,
    label: "email",
    cellSize: 3,
  },
  {
    key: "program",
    type: Field.Select,
    label: "program",
    option: Array.from(program.values()),
    default: "GO",
  },
  {
    key: "joinDate",
    type: Field.Date,
    default: new Date(),
    label: "joinDate",
  },
  {
    key: "hasCard",
    type: Field.Checkbox,
    label: "hasCard",
  },
];

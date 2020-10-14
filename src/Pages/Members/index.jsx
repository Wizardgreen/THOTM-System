import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import PageWrapper from "components/PageWrapper";
import Dialog from "components/Dialog";
import Table, { Cell } from "components/Table";
import Form, { Field } from "components/Form";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "components/Tooltip";
import program from "assets/maps/program";
import { styled } from "@material-ui/core/styles";
import { format } from "utils/date";

const StyledFAB = styled(Fab)({
  position: "fixed",
  bottom: "10%",
  right: "5%",
});

const userStructure = {
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

const tableHeader = [
  "id",
  "name",
  "nickname",
  "lineId",
  "phone",
  "program",
  "storage",
  "programExpiryDate",
  "note",
].map((name) => {
  if (name === "program") {
    return { name, label: name, type: Cell.Text, map: program };
  }
  return { name, label: name, type: Cell.Text };
});

const formSetting = [
  { key: "name", type: Field.Text, label: "name" },
  { key: "nickname", type: Field.Text, label: "nickname" },
  { key: "birthday", type: Field.Date, label: "birthday" },
  { key: "city", type: Field.Text, label: "city" },
  { key: "lineId", type: Field.Text, label: "lineId" },
  { key: "phone", type: Field.Text, label: "phone" },
  { key: "email", type: Field.Text, fullWidth: true, label: "email" },
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

export default function Members() {
  const [isDialogOpen, setDialog] = useState(false);
  const firebase = useFirebase();
  const memberList = useSelector((state) => {
    const { member } = state.firebase.data;
    return member ? Object.values(member) : [];
  });

  const createMember = (data) => {
    const newId = `IC${memberList.length + 27}`;
    const payload = {
      ...userStructure,
      ...data,
      id: newId,
      joinDate: format(data.joinDate, "yyyy-MM-dd"),
      birthday: format(data.birthday, "yyyy-MM-dd"),
    };

    firebase.set(`member/${newId}`, payload, () => {
      closeDialog();
    });
  };

  const closeDialog = () => {
    setDialog(false);
  };
  const title = ["create", "member"];
  return (
    <PageWrapper name="members">
      <Table header={tableHeader} dataList={memberList} />
      <Tooltip title={title} placement="top">
        <StyledFAB
          onClick={() => setDialog(true)}
          color="primary"
          aria-label="new-member"
        >
          <AddIcon />
        </StyledFAB>
      </Tooltip>
      <Dialog title={title} open={isDialogOpen} onClose={closeDialog}>
        <Form
          setting={formSetting}
          onConfirm={createMember}
          onCancel={closeDialog}
        />
      </Dialog>
    </PageWrapper>
  );
}

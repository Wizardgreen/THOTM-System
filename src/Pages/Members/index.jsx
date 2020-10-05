import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import PageWrapper from "components/PageWrapper";
import Dialog from "components/Dialog";
import Table, { CellType } from "components/Table";
import Form, { fieldType } from "components/Form";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "components/Tooltip";
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

const program = [
  { label: "丘主", value: "HL" },
  { label: "有志之士", value: "MA" },
  { label: "戰地元帥", value: "FM" },
  { label: "禁軍統領", value: "GG" },
  { label: "菁英指揮官", value: "EC" },
  { label: "見習指揮官", value: "OC" },
  { label: "游擊隊指揮官", value: "GO" },
];

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
    return { name, label: name, type: CellType.Text, mapping: program };
  }
  return { name, label: name, type: CellType.Text };
});

const formSetting = [
  { key: "name", type: fieldType.Text, label: "name" },
  { key: "nickname", type: fieldType.Text, label: "nickname" },
  { key: "birthday", type: fieldType.Date, label: "birthday" },
  { key: "city", type: fieldType.Text, label: "city" },
  { key: "lineId", type: fieldType.Text, label: "lineId" },
  { key: "phone", type: fieldType.Text, label: "phone" },
  { key: "email", type: fieldType.Text, fullWidth: true, label: "email" },
  {
    key: "program",
    type: fieldType.Select,
    label: "program",
    option: program,
    default: "GO",
  },
  {
    key: "joinDate",
    type: fieldType.Date,
    default: new Date(),
    label: "joinDate",
  },
  {
    key: "hasCard",
    type: fieldType.Checkbox,
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
      <Table header={tableHeader} data={memberList} />
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

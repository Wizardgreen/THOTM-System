import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import PageWrapper from "components/PageWrapper";
import Dialog from "components/Dialog";
import Table from "components/Table";
import Form from "components/Form";
import SpeedDial from "components/SpeedDial";
import { format } from "utils/date";
import { makeStyles } from "@material-ui/core/styles";
import { userStructure, tableHeader, formSetting } from "./setting";
import { fetchMemberList } from "store/slice/member";

const useStyle = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export function Member() {
  const [isSpeedDialOpen, setSpeedDial] = useState(false);
  const [isDialogOpen, setDialog] = useState(false);
  const firebase = useFirebase();
  const classes = useStyle();
  const dispatch = useDispatch();
  const memberList = useSelector(({ member }) => {
    return member ? Object.values(member.data) : [];
  });

  useEffect(() => {
    dispatch(fetchMemberList());
  }, [dispatch]);

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

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  const openSpeedDial = () => {
    setSpeedDial(true);
  };

  const closeSpeedDial = () => {
    setSpeedDial(false);
  };

  const actions = [
    { name: "add", icon: "add", func: openDialog },
    { name: "check", icon: "assignment_late", func: () => console.log("edit") },
  ];

  const title = ["create", "member"];

  return (
    <PageWrapper name="member">
      <Table header={tableHeader} dataList={memberList} />
      <SpeedDial
        className={classes.speedDial}
        open={isSpeedDialOpen}
        onOpen={openSpeedDial}
        onClose={closeSpeedDial}
        actions={actions}
      />
      <Dialog
        title={title}
        open={isDialogOpen}
        onClose={closeDialog}
        maxWidth="md"
      >
        <Form
          setting={formSetting}
          onConfirm={createMember}
          onCancel={closeDialog}
        />
      </Dialog>
    </PageWrapper>
  );
}

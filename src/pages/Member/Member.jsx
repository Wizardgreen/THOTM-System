import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageWrapper from "components/PageWrapper";
import Dialog from "components/Dialog";
import Table from "components/Table";
import Form from "components/Form";
import SpeedDial from "components/SpeedDial";
import { makeStyles } from "@material-ui/core/styles";
import { userStructure, tableHeader, formSetting } from "./setting";
import { fetchMemberList, postNewMember } from "store/slice/member";

const useStyle = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export function Member() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [isSpeedDialOpen, setSpeedDial] = useState(false);
  const [isDialogOpen, setDialog] = useState(false);
  const memberList = useSelector(({ member }) => {
    return member ? Object.values(member.data) : [];
  });

  useEffect(() => {
    dispatch(fetchMemberList());
  }, [dispatch]);

  const handelMemberCreate = (data) => {
    const memberId = `IC${memberList.length + 27}`;
    const payload = {
      ...userStructure,
      ...data,
      id: memberId,
    };

    dispatch(
      postNewMember({
        memberId,
        payload,
        callback: closeDialog,
      })
    );
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

  const title = ["i18n_create", "i18n_member"];

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
          onConfirm={handelMemberCreate}
          onCancel={closeDialog}
        />
      </Dialog>
    </PageWrapper>
  );
}

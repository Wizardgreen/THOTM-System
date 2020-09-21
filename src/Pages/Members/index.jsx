import React, { useState, useEffect } from "react";
import PageWrapper from "Components/PageWrapper";
import Table, { CellType } from "Components/Table";
import { useSelector } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import { styled } from "@material-ui/core/styles";

const StyledFAB = styled(Fab)({
  position: "fixed",
  bottom: 0,
  right: 0,
});

export default function Members() {
  const memberList = useSelector((state) => {
    const { member } = state.firebase.data;
    return member ? Object.values(member) : [];
  });

  // console.log(memberList);
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
  ].map((name) => ({ name, label: `member.${name}`, type: CellType.Text }));

  return (
    <PageWrapper name="members">
      <Table header={tableHeader} data={memberList} />
      <Tooltip title="New Member" placement="top">
        <StyledFAB color="primary" aria-label="new-member">
          <AddIcon />
        </StyledFAB>
      </Tooltip>
    </PageWrapper>
  );
}

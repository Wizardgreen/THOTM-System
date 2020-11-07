import React, { useState, useEffect } from "react";
import PageWrapper from "components/PageWrapper";
import Form, { Field } from "components/Form";
import program from "assets/maps/program";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => {
  return {
    form: {
      maxWidth: "600px",
    },
  };
});

export function EditMember({ match }) {
  const classes = useStyle();
  const memberId = match.params.id;
  const memberInfo = useSelector((state) => {
    const data = state.member[memberId];
    return data;
  });

  const formSetting = [
    { key: "name", type: Field.Text, label: "name", cellSize: 1 },
    { key: "nickname", type: Field.Text, label: "nickname", cellSize: 1 },
    { key: "birthday", type: Field.Date, label: "birthday" },
    { key: "city", type: Field.Text, label: "city" },
    { key: "lineId", type: Field.Text, label: "lineId" },
    { key: "phone", type: Field.Text, label: "phone" },
    {
      key: "email",
      type: Field.Text,
      label: "email",
      cellSize: 3,
    },
    {
      key: "program",
      type: Field.Select,
      label: "program",
      option: Array.from(program.values()),
      default: "GO",
      cellSize: 1,
    },
    {
      key: "joinDate",
      type: Field.Date,
      default: new Date(),
      label: "joinDate",
      cellSize: 3,
    },
    {
      key: "hasCard",
      type: Field.Checkbox,
      label: "hasCard",
    },
  ];

  return (
    <PageWrapper name="member-edit">
      <Form
        className={classes.form}
        setting={formSetting}
        defaultData={memberInfo}
        disableBtn
      />
    </PageWrapper>
  );
}

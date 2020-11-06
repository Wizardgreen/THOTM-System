import React from "react";
import PageWrapper from "components/PageWrapper";
import Form, { Field } from "components/Form";
import program from "assets/maps/program";
import { useSelector } from "react-redux";

export function EditMember({ match }) {
  const memberId = match.params.id;
  const memberInfo = useSelector((state) => {
    const data = state.member[memberId];
    return data;
  });
  console.log("memberInfo: ", memberInfo);

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

  return (
    <PageWrapper name="member-edit">
      <Form setting={formSetting} disableBtn />
    </PageWrapper>
  );
}

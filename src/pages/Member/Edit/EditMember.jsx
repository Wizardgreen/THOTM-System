import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PageWrapper from "components/PageWrapper";
import { useHistory } from "react-router-dom";
import Form, { Field } from "components/Form";
import Typography from "components/Typography";
import { useTranslation } from "react-i18next";
import program from "assets/maps/program";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import ButtonLine from "components/ButtonLine";

const useStyle = makeStyles(() => {
  return {
    form: {
      maxWidth: "600px",
    },
  };
});

export function EditMember({ match }) {
  const history = useHistory();
  const { t } = useTranslation();
  const classes = useStyle();
  const memberId = match.params.id;
  const memberInfo = useSelector((state) => state.member.data[memberId]);
  const [beenModified, setBeenModified] = useState(false);

  const formSetting = [
    { key: "name", type: Field.Text, label: "name" },
    { key: "nickname", type: Field.Text, label: "nickname" },
    { key: "birthday", type: Field.Date, label: "birthday" },
    { key: "city", type: Field.Text, label: "city" },
    { key: "lineId", type: Field.Text, label: "lineId" },
    { key: "phone", type: Field.Text, label: "phone" },
    {
      key: "email",
      type: Field.Text,
      label: "email",
      cellSize: 2,
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
      cellSize: 3,
    },
    {
      key: "hasCard",
      type: Field.Checkbox,
      label: "hasCard",
    },
  ];

  // 沒有此ID就跳轉回去
  useEffect(() => {
    if (memberInfo === undefined) {
      history.push("/member");
    }
  }, [memberInfo]);

  const handleBtnGoBack = () => {
    history.push("/member");
  };

  const handelSubmit = () => {};

  const handelFieldChange = () => {
    if (beenModified) return;
    setBeenModified(true);
  };

  return (
    <PageWrapper name="member-edit" gap={30}>
      <Typography variant="h4">{t("i18n_member_information")}</Typography>
      <Form
        className={classes.form}
        setting={formSetting}
        defaultData={memberInfo}
        onFieldChange={handelFieldChange}
        disableBtn
      />
      <ButtonLine>
        <Button variant="outlined" onClick={handleBtnGoBack}>
          {t("i18n_back")}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handelSubmit}
          disabled={beenModified === false}
        >
          {t("i18n_submit")}
        </Button>
      </ButtonLine>
    </PageWrapper>
  );
}

EditMember.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

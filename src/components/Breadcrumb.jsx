import MDUBreadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "./Typography";
import Link from "./Link";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => {
  return {
    breadcrumbs: {
      paddingBottom: theme.spacing(2),
    },
  };
});

export default function Breadcrumbs() {
  const classes = useStyle();
  const { t, i18n } = useTranslation();
  const [, ...nestPath] = useLocation().pathname.split("/");
  return (
    <MDUBreadcrumbs className={classes.breadcrumbs}>
      <Link path="/" text={t("i18n_home")} />
      {nestPath.map((name, idx) => {
        const text = i18n.exists(`i18n_${name}`) ? t(`i18n_${name}`) : name;
        if (idx === nestPath.length - 1) {
          return <Typography key={name}>{text}</Typography>;
        }
        return <Link path={`/${name}`} text={text} key={name} />;
      })}
    </MDUBreadcrumbs>
  );
}

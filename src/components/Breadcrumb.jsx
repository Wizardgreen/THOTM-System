import MDUBreadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "./Typography";
import Link from "./Link";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => {
  return {
    breadcrumbs: {
      paddingBottom: theme.spacing(2),
    },
  };
});

export default function Breadcrumbs() {
  const classes = useStyle();
  const [, ...nestPath] = useLocation().pathname.split("/");
  return (
    <MDUBreadcrumbs className={classes.breadcrumbs}>
      <Link path="/" text="home" />;
      {nestPath.map((name, idx) => {
        if (idx === nestPath.length - 1) {
          return <Typography key={name}>{name}</Typography>;
        }
        return <Link path={`/${name}`} text={name} key={name} />;
      })}
    </MDUBreadcrumbs>
  );
}

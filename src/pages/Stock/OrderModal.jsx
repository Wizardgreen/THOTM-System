import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Modal from "components/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addOrder } from "store/slice/shoppingCart/actions";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      flex: 1,
      padding: 5,
    },
  },
});

export default function OrderModal({ open, memberList, item, onClose }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState(memberList[0]);
  const [inputValue, setInputValue] = useState(memberList[0].name);
  const [quantity, setQuantity] = useState("1");
  const [quantityOption] = useState(() => {
    return new Array(10).fill(1).map((_, idx) => idx + 1);
  });

  const onChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const onClickCancel = () => {
    setQuantity("1");
    setSearchValue(memberList[0]);
    setInputValue(memberList[0].name);
    onClose();
  };

  const onClickConfrim = () => {
    dispatch(
      addOrder({
        orderId: Math.floor(Date.now() / 1000),
        memberId: searchValue.id,
        sku: item.sku,
        quantity,
      })
    );
    onClickCancel();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Card>
        <CardContent>
          <Typography>{item ? item.engName : ""}</Typography>
        </CardContent>
        <CardContent className={classes.paper}>
          <FormControl>
            <InputLabel>數量</InputLabel>
            <Select native value={quantity} onChange={onChangeQuantity}>
              {quantityOption.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            disableClearable
            options={memberList}
            defaultValue={memberList[0]}
            getOptionLabel={({ id, name, nickname }) =>
              id === "stock" ? name : `${name}/${nickname}`
            }
            value={searchValue}
            inputValue={inputValue}
            onChange={(_, newValue) => setSearchValue(newValue)}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => <TextField label="訂購人" {...params} />}
          />
        </CardContent>
        <CardActions>
          <Button
            onClick={onClickConfrim}
            variant="contained"
            color="secondary"
            size="small"
          >
            加入到清單
          </Button>
          <Button onClick={onClickCancel} variant="contained" size="small">
            取消
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}

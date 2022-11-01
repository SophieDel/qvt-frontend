import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReponses } from "../reducers/user";

function Question(props) {


  const [reponse, setReponse] = useState({[props.numeroQuestion]: ""});
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user.value);

  const handleChange = (event) => {
    setReponse({...reponse, [ props.numeroQuestion ]: event.target.value});
    dispatch(
      updateReponses({ numeroQuestion: props.numeroQuestion, reponse: event.target.value })
    );
  };

  const defaultMenuItem = (
    <MenuItem value="">
      <em>Veuillez sélectionner une réponse</em>
    </MenuItem>
  );

  const menuItems = props.reponse.map((data, i) => {
    return (
      <MenuItem key={i} value={data}>
        {data}
      </MenuItem>
    );
  });

  menuItems.unshift(defaultMenuItem);

  return (
    <FormControl style={{ padding: 3, width: "fit-content" }}>
      <p>{props.question}</p>
      <Select
        value={reponse[props.numeroQuestion]}
        onChange={handleChange}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default Question;

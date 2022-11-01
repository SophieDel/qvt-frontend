import styles from "../styles/Questionnaire.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReponses } from "../reducers/user";

function Question(props) {
  //     return (
  //         <div className={styles.container}>
  // <div className={styles.numeroQuestion}>{props.numeroQuestion}</div>
  // <div className={styles.question}>{props.question} </div>
  // <div className={styles.reponses}>{props.reponse}</div>
  // </div>
  //     )

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
    <FormControl>
      <p>{props.question}</p>
      <Select
        value={reponse[props.numeroQuestion]}
        onChange={handleChange}
        className={styles.selectItems}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default Question;

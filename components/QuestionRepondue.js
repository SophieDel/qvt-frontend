import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function QuestionRepondue(props) {

  return (
    <FormControl style={{padding: 3, width: "fit-content"}}>
      <p>{props.question}</p>
      <Select
        value={props.reponse}
      >
       <MenuItem value={props.reponse}>{props.reponse}
       </MenuItem>
      </Select>
    </FormControl>
  )

}

export default QuestionRepondue;
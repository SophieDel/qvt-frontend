import styles from "../styles/QuestionRepondue.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReponses } from "../reducers/user";

function Question(props) {

  const user = useSelector((state) => state.user.value);

}
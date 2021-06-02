import React from "react";
import { ListElementIfc } from "../Interfaces/ListElement";
import { makeStyles, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
//work in progress
//component styles
const useStyles = makeStyles({
  root: {
    color: "black",
    whiteSpace: "nowrap",
    fontSize: "0.5em"
  },
});

export const ListElement: React.FunctionComponent<ListElementIfc> = (props) => {
  const classes = useStyles();

  //element render(
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">{props.title}</Typography>
      <ClearIcon />
    </div>
  );
};

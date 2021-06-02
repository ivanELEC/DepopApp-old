import React from "react"; // we need this to make JSX compile
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { makeStyles, IconButton } from "@material-ui/core";
import { Like } from "../Interfaces/LikeButton";

const useStyles = makeStyles({
  like: {
    color: "white",
    backgroundColor: "#E24C4C",
    borderColor: "#E24C4C",
    borderRadius: 4,
    border: 1,
    borderStyle: "solid",
  },
  notLike: {
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 4,
    border: 1,
    borderStyle: "solid",
  },
});

export const LikeButton: React.FunctionComponent<Like> = (props) => {
  const classes = useStyles();

  //hooks

  //effects

  //element render
  return (
    <div>
      {props.like ? (
        <div>
          <IconButton size="small">
            <ThumbUpOutlinedIcon className={classes.like} />{" "}
            {props.hasCount ? <div>{props.count}</div> : <div></div>}
          </IconButton>
        </div>
      ) : (
        <div>
          <IconButton size="small">
            <ThumbUpOutlinedIcon className={classes.notLike} />
            {props.hasCount ? <div>{props.count}</div> : <div></div>}
          </IconButton>
        </div>
      )}
    </div>
  );
};

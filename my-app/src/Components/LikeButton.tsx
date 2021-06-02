import React from "react"; // we need this to make JSX compile
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { makeStyles, IconButton, Typography } from "@material-ui/core";
import { Like } from "../Interfaces/LikeButton";

const useStyles = makeStyles({
  root: {},
  like: {
    color: "white",
    backgroundColor: "#E24C4C",
    borderColor: "#E24C4C",
    borderRadius: 4,
    border: 1,
    borderStyle: "solid",
    "&:hover": {
      backgroundColor: "#E24C4C",
    },
  },
  likeIcon: {
    color: "white",
  },
  notLike: {
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 4,
    border: 1,
    borderStyle: "solid",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  notLikeIcon: {
    color: "black",
  },
  count: {
    fontSize: "0.7em",
    position: "relative",
    left: 3,
    padding: 2,
    fontWeight:"bold"
  },
  
});

export const LikeButton: React.FunctionComponent<Like> = (props) => {
  const classes = useStyles();

  //hooks

  //effects

  //element render
  return (
    <div className={classes.root}>
      {props.like ? (
        <div className={classes.like}>
          <IconButton size="small">
            <ThumbUpOutlinedIcon className={classes.likeIcon} />
            {props.hasCount ? (
              <Typography variant="subtitle1">
                <div className={classes.count}>{props.count}</div>
              </Typography>
            ) : (
              <div></div>
            )}
          </IconButton>
        </div>
      ) : (
        <div>
          <IconButton size="small" className={classes.notLike}>
            <ThumbUpOutlinedIcon className={classes.notLikeIcon} />
            {props.hasCount ? (
              <Typography variant="subtitle1">
                <div className={classes.count}>{props.count}</div>
              </Typography>
            ) : (
              <div></div>
            )}
          </IconButton>
        </div>
      )}
    </div>
  );
};

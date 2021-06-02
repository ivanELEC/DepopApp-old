import React, { useState,  useContext } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { BasicImgCard } from "../Interfaces/ImageCard";
import { LikeButton } from "./LikeButton";
//component styles
const useStyles = makeStyles({
  root: {
    position: "relative",
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: "#DADCE1",
    borderRadius: 4,
    background: "#FFFFFF",
    height: "18vh",
    webkitBoxShadow: "none",
    mozBoxShadow: "none",
    boxShadow: "none",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex:0
  },
  overlayText: {
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "18vh",
    color: "white",
  },
  subtitle1: {
    fontWeight: "normal",
  },
  subtitle2: {
    fontWeight: "bold",
  },
  likeButton: {
    position: "absolute",
    right: "1vh",
    top: "1vh",
    zIndex:1
  },
});

export const ImageCard: React.FunctionComponent<BasicImgCard> = (props) => {
  const classes = useStyles();
  //hooks//
  
  //hook to store like status of 
  const[buttonLike, setButtonLike] = useState<boolean>(false);

  
  //functions//
  const handleLike = () => {
    //if button is currently unliked, increase likeCount in session storage - else decrease like count
    if(buttonLike==false){
      let likeCountStr = sessionStorage.getItem("likeCount");
      let likeCount = parseInt(likeCountStr);
      likeCount = likeCount + 1;
      likeCountStr = likeCount.toString();
      sessionStorage.setItem("likeCount", likeCountStr);
    }
    else{
      let likeCountStr = sessionStorage.getItem("likeCount");
      let likeCount = parseInt(likeCountStr);
      likeCount = likeCount - 1;
      likeCountStr = likeCount.toString();
      sessionStorage.setItem("likeCount", likeCountStr);
    }
    //toggle state of button
    setButtonLike(!buttonLike);
  }

  //element render//
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia alt={props.title} component="img" image={props.image} />

        <CardContent>
          <div className={classes.likeButton} onClick={() => handleLike()}>
            <LikeButton hasCount={false} count={0} like={buttonLike}/>
          </div>
          {props.sold ? (
            <div className={classes.overlay}>
              <Typography className={classes.overlayText} variant="h6">
                Sold
              </Typography>
            </div>
          ) : null}
        </CardContent>
      </Card>
      <Typography className={classes.subtitle1} variant="subtitle2">
        {props.title}
      </Typography>
      <Typography className={classes.subtitle1} variant="subtitle2">
        {props.brand}
      </Typography>
      <Typography className={classes.subtitle1} variant="subtitle2">
        {props.size}
      </Typography>
      <Typography className={classes.subtitle2} variant="subtitle1">
        {props.price}
      </Typography>
    </div>
  );
};

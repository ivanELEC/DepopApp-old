import React, { useState, useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { BasicButton } from "../Interfaces/GenericButton";

const useStyles = makeStyles({
  root: {
    whiteSpace: "nowrap",
    position:"relative",
    left:-25
  },
  defaultButton: {
    color: "black",
    backgroundColor: "white",
  },
  clickedButton: {
    color: "white",
    backgroundColor: "#E24C4C",
    '&:hover':{
      color:"black"
    }
  },
});

export const GenericButton: React.FunctionComponent<BasicButton> = (props) => {
  const classes = useStyles();

  //hooks//

  //hook for handling state of button
  const [buttonClick, setButtonClick] = useState<boolean>(false);

  //effects//

  //functions//

  //function for handling toggling of button
  const toggleButton = () => {
    setButtonClick(!buttonClick);
  };

  //element render
  return (
    <div className={classes.root}>
      {buttonClick ? (
        <div>
          <Button
            className={classes.clickedButton}
            onClick={() => toggleButton()}
            variant="outlined"
          >
            {props.clickedText}
          </Button>
        </div>
      ) : (
        <div>
          <Button
            className={classes.defaultButton}
            onClick={() => toggleButton()}
            variant="outlined"
          >
            {props.defaultText}
          </Button>
        </div>
      )}
    </div>
  );
};

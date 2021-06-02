import React, {useContext} from "react"; // we need this to make JSX compile
import { Grid, makeStyles } from "@material-ui/core";
import { LikeButton } from "./LikeButton";
import { BasicHeader } from "../Interfaces/Header";
import { AppContext } from "../Context/AppContext";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
    color: "#1B1B1B",
    padding: 15,
  },
});

export const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  //hooks//

  //context hooks from AppContext to handle likes
  const {likeCount} = useContext(AppContext);



  //effects

  //element render
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={1}>
          <LikeButton hasCount={true} count={likeCount} like={false} />
        </Grid>
      </Grid>
    </div>
  );
};

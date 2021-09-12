import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import Box from "@material-ui/core/Box";
import { sizing } from "@material-ui/system";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Home() {
  let history = useHistory();

  return (
    <Box width="90%">
      <Grid
        container
        direction="column"
        spacing="10"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Button
            onClick={() => history.push("/albums")}
            startIcon={<PhotoAlbumIcon />}
            size="large"
          >
            Albums
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push("/todos")}
            startIcon={<FormatListNumberedIcon />}
            size="large"
          >
            To-do's
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push("/posts")}
            startIcon={<PostAddIcon />}
            size="large"
          >
            Posts
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

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
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          style={{
            padding: "30px",
            paddingTop: "100px",
          }}
          item
        >
          <Button
            style={{
              padding: "10px",
              width: "300px",
              height: "100px",
              backgroundColor: "#FDAC53",
            }}
            onClick={() => history.push("/albums")}
            startIcon={<PhotoAlbumIcon />}
            size="large"
          >
            Albums
          </Button>
        </Grid>
        <Grid
          style={{
            padding: "30px",
          }}
          item
        >
          <Button
            style={{
              padding: "10px",
              width: "300px",
              height: "100px",
              backgroundColor: "#B55A30",
            }}
            onClick={() => history.push("/todos")}
            startIcon={<FormatListNumberedIcon />}
            size="large"
          >
            To-do's
          </Button>
        </Grid>
        <Grid
          item
          style={{
            padding: "30px",
          }}
        >
          <Button
            style={{
              padding: "30px",
              width: "300px",
              height: "100px",
              backgroundColor: "#9BB7D4",
            }}
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

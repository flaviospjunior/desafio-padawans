import React from "react";
import styled from "styled-components";
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
import { Button } from "@material-ui/core";
import { ButtonStyledAlbums } from "./style";
import { ButtonStyledTodos } from "./style";
import { ButtonStyledPosts } from "./style";
import { BoxStyled } from "./style";
import { blue } from "@material-ui/core/colors";

export default function Home() {
  let history = useHistory();

  return (
    <BoxStyled width="100%">
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
          <ButtonStyledAlbums
            onClick={() => history.push("/albums")}
            startIcon={<PhotoAlbumIcon />}
            size="large"
          >
            Albums
          </ButtonStyledAlbums>
        </Grid>
        <Grid
          style={{
            padding: "30px",
          }}
          item
        >
          <ButtonStyledTodos
            onClick={() => history.push("/todos")}
            startIcon={<FormatListNumberedIcon />}
            size="large"
          >
            To-do's
          </ButtonStyledTodos>
        </Grid>
        <Grid
          item
          style={{
            padding: "30px",
          }}
        >
          <ButtonStyledPosts
            onClick={() => history.push("/posts")}
            startIcon={<PostAddIcon />}
            size="large"
          >
            Posts
          </ButtonStyledPosts>
        </Grid>
      </Grid>
    </BoxStyled>
  );
}

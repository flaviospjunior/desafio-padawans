import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todos from "./Todos";
import Albums from "./Albums";

export default function Home() {
  return (
    <React.Fragment>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => alert("Teste")}
          label="Posts"
          icon={<PostAddIcon />}
        />
        <BottomNavigationAction label="Albums" icon={<PhotoAlbumIcon />} />

        <BottomNavigationAction
          label="To-dos"
          icon={<FormatListNumberedIcon />}
        />
      </BottomNavigation>
    </React.Fragment>
  );
}

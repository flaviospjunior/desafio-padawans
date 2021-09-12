import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();

  return (
    <React.Fragment>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => history.push("/posts")}
          label="Posts"
          icon={<PostAddIcon />}
        />
        <BottomNavigationAction
          onClick={() => history.push("/albums")}
          label="Albums"
          icon={<PhotoAlbumIcon />}
        />

        <BottomNavigationAction
          onClick={() => history.push("/todos")}
          label="To-dos"
          icon={<FormatListNumberedIcon />}
        />
      </BottomNavigation>
    </React.Fragment>
  );
}

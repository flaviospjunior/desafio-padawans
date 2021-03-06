import React, { useEffect, useState } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import api from "../api/api";
import HomeIcon from "@material-ui/icons/Home";
import { DataGridCustom, HomeContainer } from "./style";
import { useHistory } from "react-router-dom";

import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";

export default function Todos() {
  const history = useHistory();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      type: "number",
    },
    {
      field: "userId",
      headerName: "UserID",
      width: 150,
      type: "number",
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "completed",
      headerName: "Completed",
      width: 150,
      type: "boolean",
    },
  ];
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    api
      .get("/todos")
      .then((response) => setTodo(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    console.error(todo);
  }, [todo]);

  return (
    <React.Fragment>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          onClick={() => history.push("/")}
          icon={<HomeIcon />}
        />
      </BottomNavigation>

      <HomeContainer>
        <div
          style={{
            height: "90vh",
            width: "100%",
          }}
        >
          <DataGridCustom
            rows={todo}
            columns={columns}
            disableSelectionOnClick
          />
        </div>
      </HomeContainer>
    </React.Fragment>
  );
}

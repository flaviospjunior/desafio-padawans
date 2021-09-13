import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

export const HomeContainer = styled.div`
  background-color: #white;
  display: "flex";
`;

export const DataGridCustom = styled(DataGrid)`
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',

`;

export const ButtonStyledAlbums = styled(Button)`
  && {
    color: white;
    background-color: #fdac53;
    height: 100px;
    width: 300px;
  }
`;

export const ButtonStyledTodos = styled(ButtonStyledAlbums)`
  && {
    background-color: #9bb7d4;
  }
`;

export const ButtonStyledPosts = styled(ButtonStyledAlbums)`
  && {
    background-color: #b55a30;
  }
`;

export const BoxStyled = styled.div`
  background: linear-gradient(to right, #673ab7, #512da8);
  position: absolute;
  height: 100%;
  width: 100%;
`;

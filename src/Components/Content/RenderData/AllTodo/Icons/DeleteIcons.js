import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import './icons.css';

const DeleteButton = () => {
  return (
    <IconButton className="delete-button" aria-label="delete">
      <DeleteIcon  />
    </IconButton>
  );
};

export default DeleteButton;

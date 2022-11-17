import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import './icons.css';

const DeleteButton = () => {
  return (
    <IconButton className="icon-button" aria-label="delete">
      <DeleteIcon style={{ color: 'red',marginLeft:'5px',
    marginRight:'80px',
    position: 'absolute',
     }}/>
    </IconButton>
  );
};

export default DeleteButton;

import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import './icons.css';

const EditButtons = () => {
  return (
    <IconButton className="edit-button" aria-label="delete">
      <EditIcon />
    </IconButton>
  );
};

export default EditButtons;

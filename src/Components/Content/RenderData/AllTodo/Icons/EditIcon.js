import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import './icons.css';

const EditButtons = () => {
  return (
    <IconButton className="icon-button" aria-label="delete">
      <EditIcon style={{ color: "#1D1CE5",marginLeft:'5px',
      marginTop:'0px',
    marginRight:'160px',
    position: 'absolute' }} className />
    </IconButton>
  );
};

export default EditButtons;

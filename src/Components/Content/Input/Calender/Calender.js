import "./calender.scss";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const Calender = (props) => {
  return (
    <div className="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          ampm={false}
          label="Set Time & Date"
          value={props.value}
          onChange={props.handleChange}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;

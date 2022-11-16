import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "./calender.css";
const Calender = () => {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Set Time & Date"
          value={value}
          onChange={handleChange}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;

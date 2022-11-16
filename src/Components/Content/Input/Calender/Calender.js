import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Icon } from '@mui/material';
import './calender.css';
const Calender = () => {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className='calender' >
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
}

export default Calender;
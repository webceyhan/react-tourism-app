import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export const DatePicker = () => {
    const [value, setValue] = React.useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                openTo="day"
                value={value}
                displayStaticWrapperAs="desktop"
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

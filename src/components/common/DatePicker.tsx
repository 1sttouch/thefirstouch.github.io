import React from 'react';
import { TextField } from '@mui/material';

interface Props {
    value?: string
    setValue?: (value: string)=>void
}

const DatePicker = ({value, setValue}:Props) => {

    const onChange = (event) => {
        if(setValue && event?.target?.value){
            setValue(event?.target?.value)
        }
    }

    return (
        <>
                        <TextField
                            variant='outlined'
                            id="date-of-birt"
                            type="date"     
                            label="Date of Birth *"
                            sx={{
                                width: "100%",
                                borderRadius: 0,
                                border : 'none',
                                padding: '0px 0px',
                                margin: '10px 0px',                        
                            }}        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                sx:{
                                    width: "100%",
                                    borderRadius: 0,
                                    border : '0px solid #ddd',
                                    "&:hover": {
                                        border: "0px solid #ddd",
                                    },
                                }
                            }}
                            value={value ? value : undefined}
                            onChange={onChange}
                        />
        </>
    );
};

export default DatePicker;

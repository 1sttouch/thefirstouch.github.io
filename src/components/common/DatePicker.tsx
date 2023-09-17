import React from 'react';
import { TextField } from '@mui/material';

interface Props {
}

const DatePicker = () => {
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
                            
                        />
        </>
    );
};

export default DatePicker;
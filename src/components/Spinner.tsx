import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
    show: boolean
}

const Spinner = ({show}) => {
    return (
        <>
            <Backdrop
                open={show}
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <CircularProgress sx={{ color: 'yellow' }} />
            </Backdrop>
        </>
    );
};

export default Spinner;
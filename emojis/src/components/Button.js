import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';

const Button = () => {
    return (
        <>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab variant="extended" color="primary" aria-label="add">
                    <SearchIcon sx={{ mr: 1 }} />
                    Obtener Emoji
                </Fab>
            </Box>
        </>
    );
}

export default Button;
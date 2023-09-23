import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const MainNav = () => {
    const [value, setValue] = useState(0);
    const navigate  = useNavigate();

    useEffect(() => {
        if (value === 0) navigate('/trending');
        else if (value === 1) navigate('/movies');
        else if (value === 2) navigate('/series');

    }, [value,navigate])

    return (
        <Box sx={{ width: '100vw', position: "fixed", top: 0, backgroundColor: "#2d313a", zIndex: 100 }} >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Trending"
                    icon={<WhatshotIcon />}
                />

                <BottomNavigationAction
                    label="Movies"
                    icon={<MovieIcon />}
                />
                <BottomNavigationAction
                    label="TV Series"
                    icon={<TvIcon />}
                />
           
            </BottomNavigation>
        </Box>
    );
}


export default MainNav;

import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

export const Banner = () => {
    return (
        <Box>
            <Box sx={{
                zIndex: -1,
                backgroundColor: '#F48C20',
                height: 235,
                left: '0.5%',
                right: '0.5%',
                width: '99%',
                top: 0,
                position: 'fixed'
            }}/>
            <Stack sx={{width: '84%', mx: 'auto', mt: 2, color: 'white'}}>
                <Typography variant='h4'>پشتیبانی آنلاین</Typography>
                <Typography>به سایت ما خوش آمدید در خدمتتون هستم</Typography>
            </Stack>
        </Box>
    );
};


import React from 'react';
import {grey} from "@mui/material/colors";
import {Box, Stack, Typography} from "@mui/material";
import {BsInstagram, BsTelegram, BsTwitter, BsWhatsapp, BsYoutube} from "react-icons/bs";

export const SocialMedia = () => {
    return (
        <Box sx={{py: 3, mt: 2, mx: 'auto', width: '88%', boxShadow: 3, borderRadius: 4, textAlign: 'center'}}>
            <Stack sx={{width: '90%', mx: 'auto'}}>
                <Typography>شبکه های اجتماعی</Typography>
                <Typography>حامی چت را در شبکه های اجتماعی دنبال کنید</Typography>
            </Stack>
            <Stack direction="row" sx={{justifyContent: 'space-around', my: 3}}>
                <BsTwitter color="blue" size={28}/>
                <BsInstagram color="red" size={28}/>
                <BsWhatsapp color="green" size={28}/>
                <BsTelegram color="blue" size={28}/>
                <BsYoutube color="red" size={28}/>
            </Stack>
        </Box>
    );
};


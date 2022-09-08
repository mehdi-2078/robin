import React from 'react';
import {Box, Button, Input, Stack, styled, Typography} from "@mui/material";

export const Search = () => {
    const MyButton = styled(Button)({
        borderBottomLeftRadius: 18,
        borderTopLeftRadius: 18,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#000000",
        backgroundColor: 'black',
        color: 'white',
    });
    const MyInput = styled(Input)({
        borderBottomRightRadius: 18,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#000000",
        paddingRight: 9,
        color: '#000000',
        backgroundColor: 'white'
    });

    return (
        <Box sx={{py: 3, mt: 2, mx: 'auto', width: '88%', boxShadow: 3, borderRadius: 4, mb: 10}}>
            <Stack sx={{width: '90%', mx: 'auto'}}>
                <Typography>جواب خودتان را پیدا کنید</Typography>
                <Stack direction="row" sx={{marginTop: 2}}>
                    <MyInput variant="outlined" type="text" placeholder="سوال خود را تایپ کنید"/>
                    <MyButton variant="text">
                        جست و جو
                    </MyButton>
                </Stack>
                <Stack>
                    <Typography sx={{marginTop: 2}}>اطلاع از نحوه پرداخت آنلاین؟</Typography>
                    <Typography sx={{marginTop: 1}}>مشاهده ویدئو آموزشی</Typography>
                </Stack>
            </Stack>
        </Box>);
};


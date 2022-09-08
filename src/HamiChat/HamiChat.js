import React from 'react';
import {Box, Button, Stack, styled, Typography} from "@mui/material";
import {grey} from '@mui/material/colors';
import {BsArrowLeft, BsBell, BsFillPlayFill} from "react-icons/bs";


export const HamiChat = () => {
    const MyButton = styled(Button)({
        borderRadius: 18,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#000000",
        color: 'black',
        marginTop: 20,
        marginRight: 'auto'
    });
    return (
        <>
            <Box sx={{
                py: 3, mt: 4, mx: 'auto', width: '88%',
                boxShadow: 3, borderRadius: 4, backgroundColor: 'white', zIndex: 5
            }}>
                <Stack sx={{width: '90%', mx: 'auto'}}>
                    <Typography sx={{mr: 'auto'}}>مشاهده همه</Typography>
                    <Stack sx={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: 1,
                        borderBottomColor: "#000000",
                        paddingBottom: 4,
                    }} direction="row" alignItems='center'>
                        <BsFillPlayFill color='black' size={24}/>
                        <Stack sx={{mr: 1}}>
                            <Typography>پشتیبانی آنلاین</Typography>
                            <Typography>تماس صوتی و تصویری</Typography>
                        </Stack>
                        <Stack sx={{
                            mr: 'auto',
                            mt: 4,
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            <BsBell color='black'/>

                        </Stack>
                    </Stack>
                    <MyButton variant="outlined" endIcon={<BsArrowLeft width={200}/>}>
                        <Typography sx={{ml: 1}}> شروع مکالمه جدید</Typography>
                    </MyButton>
                </Stack>
            </Box>

        </>
    );
};


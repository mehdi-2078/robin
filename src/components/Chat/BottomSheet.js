import React from 'react';
import {Box, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import image from '../../assets/images/pic1.jpg'
import {BsTelegram} from "react-icons/bs";
import {MdKeyboardVoice} from "react-icons/md";
import Sheet from 'react-modal-sheet';
import {
    OtherUser,
    MyUser,

    ChatBox
} from "./SheetStyle";

export const BottomSheet = () => {
    return (
        <>
            <Sheet.Container>
                <Sheet.Header/>
                <Sheet.Content>
                    <Box sx={{width: '90%', mx: 'auto'}}>
                        <Stack>
                            <Typography sx={{fontSize: 26, fontWeight: 700}}>پردیس اکبری</Typography>
                            <Typography sx={{fontSize: 18, fontWeight: 700}}>اتاق جلسه</Typography>
                            <Typography sx={{fontSize: 14, color: '#8F8F8F'}}>15 شرکت کننده آنلاین</Typography>
                        </Stack>
                        <OtherUser>
                            <Stack sx={{ml: 2}}>
                                <Typography sx={{fontSize: 14, color: '#D3D1D1', ml: 1}}>آرمان</Typography>
                                <Box sx={{backgroundColor: '#F3F4F8', py: 1, px: 3, borderRadius: 13}}>
                                    <Typography sx={{fontSize: 14}}>
                                        ممنون برای اشتراک گذاری
                                    </Typography>
                                </Box>
                            </Stack>
                            <Box
                                component="img"
                                sx={{
                                    height: 42, width: 42, borderRadius: '50%', backgroundSize: 'cover',
                                }}
                                alt="image"
                                src={image}
                            />
                        </OtherUser>
                        <OtherUser>
                            <Stack sx={{ml: 2}}>
                                <Typography sx={{fontSize: 14, color: '#D3D1D1', ml: 1}}>آرمان</Typography>
                                <Box sx={{backgroundColor: '#F3F4F8', py: 1, px: 3, borderRadius: 13}}>
                                    <Typography sx={{fontSize: 14}}>
                                        ممنون برای اشتراک گذاری
                                    </Typography>
                                </Box>
                            </Stack>
                            <Box
                                component="img"
                                sx={{
                                    height: 42, width: 42, borderRadius: '50%', backgroundSize: 'cover',
                                }}
                                alt="image"
                                src={image}
                            />
                        </OtherUser>
                        <MyUser>
                            <Stack sx={{mr: 2}}>
                                <Typography sx={{fontSize: 14, color: '#D3D1D1', mr: 1}}>آرمان</Typography>
                                <Box
                                    sx={{
                                        backgroundColor: '#000000', color: '#ffffff', py: 1, px: 3, borderRadius: 13
                                    }}>
                                    <Typography sx={{fontSize: 14}}>
                                        ممنون برای اشتراک گذاری
                                    </Typography>
                                </Box>
                            </Stack>
                            <Box
                                component="img"
                                sx={{
                                    height: 42, width: 42, borderRadius: '50%', backgroundSize: 'cover',
                                }}
                                alt="image"
                                src={image}
                            />
                        </MyUser>
                        <ChatBox>
                            <Typography sx={{color: '#D3D1D1', fontSize: 12}}>در حال نوشتن</Typography>
                            <TextField
                                sx={{
                                    direction: 'ltr',
                                    textAlign: 'right',
                                    '& fieldset': {
                                        borderRadius: '25px',
                                    }
                                }}
                                placeholder="پیام خود را وارد کنید" variant="outlined"
                                InputProps={{
                                    inputProps: {
                                        style: {textAlign: "right", borderRadius: 25},
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BsTelegram size={34} color='#FF4747'/>
                                            <MdKeyboardVoice size={34} color='#FF4747'/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </ChatBox>
                    </Box>
                </Sheet.Content>
            </Sheet.Container>6
            <Sheet.Backdrop/>
        </>
    );
};


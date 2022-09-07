import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {grey} from '@mui/material/colors';
import {HamiChatItem} from "../components/HamiChatItem";


export const HamiChat = () => {
    const info = [
        {
            title: "دپارتمان فروش و پشتیبانی",
            description: "سوالات مربوط به بخش فروش و پشتیبانی"
        },
        {
            title: "دپارتمان فنی",
            description: "سوالات و گزارشات فنی"
        },
        {
            title: "دپارتمان مالی",
            description: "سوالات مربوط به فاکتور ها و امور مالی"
        },
    ]
    return (
        <>
            <Box sx={{p: 3, backgroundColor: 'primary.main', color: grey[800]}}>
                <Typography variant="body1">برای ما پیامی بفرستید</Typography>
                {info.map((item) => (
                    <HamiChatItem title={item.title} description={item.description}/>
                ))}

            </Box>

        </>
    );
};


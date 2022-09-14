import React from 'react';
import {Box, styled} from "@mui/material";
import image from '../../assets/images/pic1.jpg'
import {BsChevronLeft} from "react-icons/bs";
import {MdCallEnd, MdFiberManualRecord, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardVoice} from "react-icons/md";
import {
    IconArrowLeft,
    IconsBottom,
    IconRecorder,
    IconArrowTop,
    IconCall,
    CustomSheet

} from "./SheetStyle";
import {BottomSheet} from "./BottomSheet";

export const Sheet = () => {
    const [isOpen, setOpen] = React.useState(false);

    const Container = styled(Box)({
        backgroundImage: `url(${image})`,
        height: isOpen ? '45vh' : '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',

    });

    return (
        <>
            <Container>
                <IconArrowLeft>
                    <BsChevronLeft size={26} color='#FF4747'/>
                </IconArrowLeft>
                <IconsBottom>
                    <IconArrowTop>
                        {!isOpen ? (<MdKeyboardArrowUp onClick={() => setOpen(true)} size={50} color='red'/>) : (
                            <MdKeyboardArrowDown onClick={() => setOpen(false)} size={50} color='red'/>)}
                    </IconArrowTop>
                    <IconCall>
                        <MdCallEnd size={40} color='#ffffff'/>
                    </IconCall>

                    <IconRecorder>
                        <span>22:15</span>
                        <MdFiberManualRecord size={26} color='red'/>
                    </IconRecorder>
                </IconsBottom>
            </Container>
            <CustomSheet
                isOpen={isOpen} onClose={() => setOpen(false)}>
                <BottomSheet/>
            </CustomSheet>
        </>
    );
};


import React from 'react';
import {Typography} from "@mui/material";
import {BsChevronLeft, BsUpload,} from "react-icons/bs";
import {
    MdCallEnd,
    MdFiberManualRecord,
    MdKeyboardArrowDown,
    MdKeyboardVoice, MdOutlineMoreVert,
    MdOutlineVideocamOff
} from "react-icons/md";
import {FiRefreshCcw} from "react-icons/fi";
import {BiMessageDetail} from "react-icons/bi";
import {
    Container,
    IconArrowLeft,
    Info,
    SectionLeft,
    SectionRight,
    IconRecorder,
    IconRight,
    ContactUser,
    BottomNavigation,
    NavIcon,
    NavIconCall,
} from "./BannerStyle";

export const Banner = () => {


    return (
        <>
            <Container>
                <IconArrowLeft>
                    <BsChevronLeft size={26} color='red'/>
                </IconArrowLeft>
                <ContactUser/>
                <Info>
                    <SectionRight>
                        <IconRight>
                            <MdKeyboardArrowDown size={50} color='#FF4747'/>
                        </IconRight>
                        <IconRight>
                            <MdOutlineVideocamOff size={30} color='#FF4747'/>
                        </IconRight>
                        <IconRight>
                            <MdKeyboardVoice size={34} color='#FF4747'/>
                        </IconRight>

                    </SectionRight>
                    <SectionLeft>
                        <Typography sx={{fontSize: 16, color: '#ffffff'}}>
                            مدیر
                        </Typography>
                        <Typography sx={{fontSize: 24, color: '#ffffff'}}>
                            پردیس اکبری
                        </Typography>
                        <IconRecorder>
                            <span>22:15</span>
                            <MdFiberManualRecord size={26} color='red'/>
                        </IconRecorder>
                    </SectionLeft>
                </Info>
                <BottomNavigation>
                    <NavIcon>
                        <MdOutlineMoreVert size={28} color='#ffffff'/>
                    </NavIcon>
                    <NavIcon>
                        <BiMessageDetail size={28} color='#ffffff'/>
                    </NavIcon>
                    <NavIconCall>
                        <MdCallEnd size={28} color='#ffffff'/>
                    </NavIconCall>
                    <NavIcon>
                        <FiRefreshCcw size={28} color='#ffffff'/>
                    </NavIcon>
                    <NavIcon>
                        <BsUpload size={28} color='#ffffff'/>
                    </NavIcon>
                </BottomNavigation>
            </Container>
        </>
    );
};


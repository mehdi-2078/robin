import {Box, Stack, styled} from "@mui/material";
import Sheet from "react-modal-sheet";

export const  IconArrowLeft = styled(Box)({
    borderWidth: 2,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    position: 'absolute',
    top: 15,
    left: 35,
})

export const  IconsBottom = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 30,
    width: '100%',
})
export const  IconRecorder = styled(Box)({
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: "blur(5px)",
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: 'center',
})
export const  IconArrowTop = styled(Box)({
    borderRadius: '50%',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
})

export const  IconCall = styled(Box)({
    borderRadius: '50%',
    width: 70,
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef233c',
    marginRight: '5%',

})
export const  OtherUser = styled(Stack)({
    flexDirection: 'row', justifyContent: 'flex-end', textAlign: 'left', alignItems: 'flex-end', marginTop: 20,
})

export const  MyUser = styled(Stack)({
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    textAlign: 'right',
    alignItems: 'flex-end',
    marginTop: 20,
})
export const  CustomSheet = styled(Sheet)`
      height: 60vh;
      inset: auto !important;
      bottom: 0 !important;
      width: 100%;
      transition: 5s;

      .react-modal-sheet-backdrop {
        background-color: transparent !important;
        opacity: 0 !important;
        transition: 5s;

      }`
export const  ChatBox = styled(Stack)({
    marginTop: 20
})

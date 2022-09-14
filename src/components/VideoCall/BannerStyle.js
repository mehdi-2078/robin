import {Box, styled} from "@mui/material";
import image from "../../assets/images/pic1.jpg";

export const Container = styled(Box)({
    backgroundImage: `url(${image})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',

});
export const IconArrowLeft = styled(Box)({
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

export const Info = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around'
})
export const SectionLeft = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 120,
    left: 35,
    textAlign: 'left'
})
export const SectionRight = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
    right: 35,
})
export const IconRecorder = styled(Box)({
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: "blur(5px)",
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 15,
    marginTop: 25,
    paddingBottom: 15,
    alignSelf: 'center',
})
export const IconRight = styled(Box)({
    borderRadius: '50%',
    width: 47,
    height: 47,
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
})
export const ContactUser = styled(Box)({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 15,
    right: 15,
    borderRadius: 15,
    backgroundImage: `url(${image})`,
    width: 121,
    height: 170,
    marginRight: '5%',
})

export const BottomNavigation = styled(Box)({
    height: 76,
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
})
export const NavIcon = styled(Box)({
    backgroundColor: '#0D0D0D',
    borderRadius: '50%',
    width: 47,
    height: 47,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
export const NavIconCall = styled(Box)({
    backgroundColor: '#FF4747',
    borderRadius: '50%',
    alignSelf: 'flex-start',
    marginTop: -20,
    width: 47,
    height: 47,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

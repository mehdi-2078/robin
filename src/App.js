import logo from './logo.svg';
import './App.css';
import {HamiChat} from "./HamiChat/HamiChat";
import {SocialMedia} from "./components/SocialMedia";
import {Search} from "./components/Search";
import {Banner} from "./components/Banner";

function App() {
    return (
        <>
            <Banner/>
            <HamiChat/>
            <SocialMedia/>
            <Search/>
        </>
    )
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Support} from "./components/Support";
import {SocialMedia} from "./components/SocialMedia";
import {Search} from "./components/Search";
import {Banner} from "./components/Banner";

function App() {
    return (
        <>
            <Banner/>
            <Support/>
            <SocialMedia/>
            <Search/>
        </>
    )
}

export default App;

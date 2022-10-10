import '../css/Home.css';
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";

const Home = () => {
    return (
        <div className="HomeContainer">
            <div>
                <Header/>
            </div>
            <div>
                <Main/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;
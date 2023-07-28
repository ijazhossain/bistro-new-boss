import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default Home;
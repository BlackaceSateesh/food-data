import { NavLink } from "react-router-dom";
import "../Components/Home.css"
const Home = () => {


  return (
    <>
      <div className="home-main">
        <div className="home-hero">
          <h1 className="home-hero-heading">Welcome to Food's Kitchen</h1>
          <button className="home-btn"> <NavLink to="/menu" className="hero-navlink"> Go to menu </NavLink></button>
        </div>
      </div>
    </>
  );
}

export default Home;
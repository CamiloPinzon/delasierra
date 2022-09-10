import React from "react";

import Hero from "../../components/hero/hero.component";
import Banda from "../../components/banda/banda.component";

const Home = () => {
    return(
        <div className="home-container">
            <Hero />
            <Banda />
        </div>
    )
}

export default Home;
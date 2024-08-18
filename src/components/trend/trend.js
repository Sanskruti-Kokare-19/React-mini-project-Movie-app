import React from "react";
import Header from "../Header/Header";
import Trending from "../../Pages/Trending/Trending";
import SimpleBottomNavigation from "../MainNav";

const Trend = ()=>{
    return(
        <div>
            {/* <Header /> */}
            <Trending/>
            <SimpleBottomNavigation />
        </div>
            
        
    )
}

export default Trend;
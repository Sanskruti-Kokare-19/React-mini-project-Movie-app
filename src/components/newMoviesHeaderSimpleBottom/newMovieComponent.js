import React from "react";
import Header from "../Header/Header";
import Movies from "../../Pages/Movies/Movies";
import SimpleBottomNavigation from "../MainNav";

const NewMovies = ()=>{
    return(
        <div>
            {/* <Header /> */}
            <Movies/>
            <SimpleBottomNavigation />
        </div>
            
        
    )
}

export default NewMovies;
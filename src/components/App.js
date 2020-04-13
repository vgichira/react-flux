import React from "react"
import HomePage from "./Homepage";
import About from "./About";
import Header from "./common/Header";

function App(){
    function getPath(params) {
        const route = window.location.pathname

        if(route === "/about"){
            return <About/>
        }
        return <HomePage/>
    }

    return(
        <div>
            <Header/>
            {getPath()}
        </div>
    )
}

export default App;
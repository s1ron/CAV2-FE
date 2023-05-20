
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

import TabbedConversation from "./components/TabbedConversation";

function App() {

    const { token, userId} = useContext(AuthContext);
    console.log(token, userId);
    console.log(process.env.REACT_APP_BASEURL);
    return (
        <>
            {token ? <Home/> : <Login/>}
            {/* <TabbedConversation/> */}
        </>
        
    );
}

export default App;

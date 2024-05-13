import {BrowserRouter, Route, Routes} from "react-router-dom";
import injectContext from "./store/context";
import { Home, Register, Login } from "./views/index";
import { Navbar } from "./components/index"

const Layout = () => {

    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<h1>Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default injectContext(Layout);

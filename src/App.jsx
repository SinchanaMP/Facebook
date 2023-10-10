import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/" element={<Navbar />}/>
    </Routes>
    </BrowserRouter>
}

export default App;
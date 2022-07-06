import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Homepage from "./pages/Homepage";
import SelectionPage from "./pages/SelectionPage";
import DrinkPage from "./pages/DrinkPage";
import Test from "./pages/Test";
import { Routes, Route, Link } from "react-router-dom";


export default function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="selection" element={<SelectionPage />} />
                <Route path="drink/:id" element={<DrinkPage />} />
                <Route path="test" element={<Test />} />
            </Routes>
        </div >
    );
}
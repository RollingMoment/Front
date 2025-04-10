import {BrowserRouter, Route, Routes} from "react-router-dom";
import UnknownRoute from "./page/UnknownRoute";
import Bridge from "./page/Bridge";
import Withdraw from "./page/Withdraw";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/invite" element={<Bridge />} />
                <Route path="/withdraw" element={<Withdraw />} />
                
                {/* 잘못된 이동인 경우 */}
                <Route path={"/*"} element={<UnknownRoute />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
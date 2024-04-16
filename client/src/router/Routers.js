import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./../App";
import Quesrions from "../pages/Quesrions";
import Formulaire from "../pages/Formulaire";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Questions" element={<Formulaire />} />
          <Route  index element={<Quesrions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

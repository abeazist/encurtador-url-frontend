import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaPrincipal from "./pages/TelaPrincipal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaPrincipal />}>

          <Route path="encurtador" element={<TelaPrincipal />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

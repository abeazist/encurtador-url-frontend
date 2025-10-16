import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaPrincipal from "./pages/TelaPrincipal";
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // Força o modo claro, mas sem alterar suas cores
    document.documentElement.style.colorScheme = "light";
  }, []);

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

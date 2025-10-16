import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaPrincipal from "./pages/TelaPrincipal";

function App() {
  useEffect(() => {
    // Força o navegador a usar o modo claro
    document.documentElement.style.colorScheme = "light";
    document.body.style.backgroundColor = "#fff"; // garante fundo branco
    document.body.style.color = "#000"; // garante texto escuro
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

import Variavel from "./pages/variaveis";
import Inicio from "./pages/inicio";
import Contato from "./pages/contato";
import Eventos from "./pages/eventos";
import NaoEncontrado from "./pages/naoEncontrado";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Navegacao() {
  return(
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Inicio />} />
         <Route path='/variaveis' element={<Variavel />} />
         <Route path='/contato' element={<Contato />} />
         <Route path='/eventos' element={<Eventos />} />

         <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}
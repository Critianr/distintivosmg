import React from 'react';
import {Contact} from './pages/contact/Contact';
import {Pines} from './pages/pines/Pines';
import {Medallas} from './pages/medallas/Medallas';
import {Joyeria} from './pages/joyeria/Joyeria';
import {InsigniasMilitares} from './pages/InsigniasMilitares/InsigniasMilitares';
import {Placas} from './pages/placas/Placas';
import {Home} from './pages/home/Homecopy.jsx';
import {NotFound} from './pages/NotFound';
import {Servicios3D} from './pages/servicios3d/Servicios3D';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './Appcopy.css'
import { Empresarial } from './pages/empresarial/Empresarial';

function App() {
  
    return (
      <BrowserRouter>
      <Routes> 
      
        <Route path="/" element={<Home />} />
        <Route path="/placas" element={<Placas />} />
        <Route path="/empresarial" element={<Empresarial />} />
        <Route path="/insignias-militares" element={<InsigniasMilitares />} />
        <Route path="/joyeria" element={<Joyeria />} />
        <Route path="/medallas" element={<Medallas />} />
        <Route path="/pines" element={<Pines />} />
        <Route path="/servicios-digitales" element={<Servicios3D />} />
        <Route path="/contactos" element={<Contact />} />
        <Route component={<NotFound />} />
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
// MenuButton.js
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
function MenuButton() {
    // OffCanvasExample
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <>
    {/* <div className={`MenuButton ${isOpen ? 'open' : ''}`} onClick={toggleMenu}> */}
      <div onClick={handleShow} className={`MenuButton ${show ? 'open' : ''}`}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
     <Offcanvas show={show} onHide={handleClose}>
     <Offcanvas.Header closeButton>
       <Offcanvas.Title text="center">2MG Distintivo</Offcanvas.Title>
     </Offcanvas.Header>
     <Offcanvas.Body>
       <div>
       Somos los cacaos de la joyería
       </div>
    <ul className='nav-menu'>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/insignias-militares">Insignias Militares</Link></li>
    <li><Link to="/empresarial">Empresarial</Link></li>
    <li><Link to="/joyeria">Joyeria</Link></li>
    <li><Link to="/medallas">Medallas</Link></li>
    <li><Link to="/pines">Pines</Link></li>
    <li><Link to="/servicios-digitales">Servicios Digitales</Link></li>
    <li><Link to="/contactos">Contactanos</Link></li>
  </ul>

     </Offcanvas.Body>
   </Offcanvas>
   </>
  );
}

export default MenuButton;

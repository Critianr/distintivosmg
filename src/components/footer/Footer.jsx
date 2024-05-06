
import imageslogo from '../../assets/logofooter.svg'
import Intam from '../../assets/instam-icons.svg'; 
import Fb from '../../assets/fb-icons.svg'; 
import Whatp from '../../assets/whatsapp-icons.svg'; 
import './footer.css'; 
function Footer(){
    return(
        <>
 <footer>  
  <div className='grid-footer'>
    <div className='container-logo'>
    <img className="logo-footer" src={imageslogo} alt="" />
    </div>
  <div className="footer-contacto">
    
    <p className='footer-text'>Cra. 110 Bis #64d-64, Engativa, Bogotá <br />
      Correo: comercial@2mgsolutions.com <br />
      <a href="tel:+573108839772" className='footer-text'>Telefono: +57 3108839772</a>
    </p>
    {/* <p>Correo: comercial@2mgsolutions.com</p>
    <p>Telefono: 3214298999</p> */}
      <div className='follows'>
        <a href="https://www.instagram.com/2mgsolutions/" target="_blank" rel="noopener noreferrer"><img className='svg-follows' src={Intam} alt="" /></a>
        <a href="https://www.facebook.com/2MGSOLUTIONSSAS/" target="_blank" rel="noopener noreferrer"><img className='svg-follows' src={Fb} alt="" /></a>
        <a href="https://api.whatsapp.com/send?phone=+573108839772&text=Bienvenido%20a%202MGDistintivos%20productos%20a%20tu%20medida!" target="_blank" rel="noopener noreferrer"><img className='svg-follows' src={Whatp} alt="" /></a>
      </div>
      
  </div>
  <div className='copyright'>
     <p className='footer-text'>
      2MG Distintivos © Todos los derechos reservados 2024
     </p>
      </div>
  </div>
  <div>
    <p className='footer-text'>Gracias por apoyar la industria colombiana</p>
    </div>
</footer>
        </>
    )
}

export {Footer};
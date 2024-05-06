import hdlogo from '../../assets/mdmlogo.png';
import Menu from '../menu/Menu';
import Intam from '../../assets/instam-icons-header.svg'; 
import Fb from '../../assets/fb-icons-header.svg'; 
import Whatp from '../../assets/whatsapp-icons-header.svg'; 
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
  return (
    <>
    
    <header>
    <div className='offer'><p className='text-offer'>Si te gusta lo mejor, ¡nosotros lo fabricamos!</p> </div> 
     <div className='wrp-header'>

        <div className='wrp-logo'>
        <a href='/'><img className="logo-init" src={hdlogo} alt="Mi Imagen" ></img></a>
        <h1 className='title'><a  className="title" href="/">2MG DISTINTIVOS</a></h1>  
        </div>
        {/* <div className='wrp-title'>
        
        </div> */}
        <div className='wrp-follow'>
        <li className='link-header'><Link to='/empresarial' className='link-header'>Empresas</Link></li>
        <li className='link-header'><Link to='/insignias-militares' className='link-header'>Impresiones 3D</Link></li>
        <li className='link-header'><Link className='link-header'>Quienes Somos</Link></li>
        {/* <li className='link-header'><Link className='link-header'><b>+</b></Link></li> */}
        <li><a href="https://www.instagram.com/2mgsolutions/" target="_blank" rel="noopener noreferrer"><img className='svg-follows-header' src={Intam} alt="" /></a></li>
        <li><a href="https://www.facebook.com/2MGSOLUTIONSSAS/" target="_blank" rel="noopener noreferrer"><img className='svg-follows-header' src={Fb} alt="" /></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=+573108839772&text=Bienvenido%20a%202MGDistintivos%20productos%20a%20tu%20medida!" target="_blank" rel="noopener noreferrer"><img className='svg-follows-header' src={Whatp} alt="" /></a></li>
          
        <Menu />  
        </div>
        
        </div>
      {/* </div> */}
      </header>
      </>
  );
}

export {Header}
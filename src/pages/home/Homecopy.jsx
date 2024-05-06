import {Header} from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import Pines from '../../assets/img-home/Pinespersonalizadosqueen.jpg';
import Joyeria from '../../assets/img-home/anillos1.jpg';
import InsigniasMilitaress from '../../assets/img-home/47.jpg';
import Medallas from '../../assets/notimg.png';
import Empresarial from '../../assets/img-home/fichero2.jpg'
import ServiDigaimge from '../../assets/img-home/Estatuillas 1.jpg';
import UncontrolledExample from '../../components/UncontrolledExample';
import imgBannerOne from '../../assets/img-home/good.jpg'
import bannertwo from '../../assets/img-home/bannertwo.jpg';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { Link } from 'react-router-dom';
function Home(){

    return(
      
        
        
        <div className='wrp'>
        <Header />
        <div className='gallery'>
        

      <UncontrolledExample />
      
      <div className='description'>
      <p>Lo que nos distingue es nuestra capacidad para dar vida a tus ideas. Ya sea que desees un diseño personalizado que capture la esencia de tu marca, una insignia institucional que transmita tu identidad con autoridad, o una pieza de joyería única que refleje tu estilo individual, nuestro equipo de expertos está aquí para hacer realidad tu visión.

      </p>
      </div>
      <div className='wrp-banner'>
      <div className='banner-two'>
        <div class="box-content">
            <h2 class="box-title">Distintivos</h2>
            <p class="box-description">
            Destaca tu empresa PYME con distintivos personalizados de calidad, creamos insignias y joyería que reflejan la identidad y el profesionalismo de tu negocio. Desde diseños auténticos hasta emblemas que fortalecen el sentido de pertenencia, nuestro equipo está comprometido en hacer realidad tus ideas. ¡Haz que tu empresa se destaque con estilo hoy mismo!            </p>
        </div>
        <img className='img-banner' src={bannertwo} alt="Image description" />
        
        </div>
        <div className='banner-one'>
        
        <div class="box-content">
            <h2 class="box-title">Insignias</h2>
            <p class="box-description">
            Nos especializamos en la creación de insignias militares de primera calidad que reflejan tu unidad, identidad y compromiso. Ya sea que busques un diseño personalizado que capture la esencia de tu unidad, una insignia institucional que afirme tu identidad con autoridad, o una pieza de metal única que exprese tu dedicación y honor, nuestro equipo de expertos está comprometido en convertir tu visión militar en realidad.
            </p>
        </div>
        <img className='img-banner' src={imgBannerOne} alt="Image description" />
        </div>

      </div>
      <h2>NUESTRO PRODUCTOS</h2> 
      <div className='wrp-productos'>
            
      <div className="grid-container">
      
      <div className="item">
      <Link to="/insignias-militares" className="image-link">
      <div className="item-content">
       <img className="img-home" src={InsigniasMilitaress} alt="Imagen 1" />
      <div className="text-content">
          <h3 className='item-title'>Insignias Militares</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>  
      </div>
      <div className="item">
      <Link to="/empresarial" className="image-link">
      <div className="item-content">
        <img className="img-home" src={Empresarial} alt="Imagen 2" />
        <div className="text-content">
          <h3 className='item-title'>Empresarial</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>
    </div>  

      <div className="item">
      <Link to="/joyeria" className="image-link">
      <div className="item-content">
      <img className="img-home" src={Joyeria} alt="Imagen 3" />
      <div className="text-content">
          <h3 className='item-title'>Joyeria</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>
      </div>

      <div className="item">
      <Link to="/medallas" className="image-link">
      <div className="item-content">
      <img className="img-home" src={Medallas} alt="Imagen 4" />
      <div className="text-content">
          <h3 className='item-title'>Medallas</h3>
          {/* <p>Descripción corta del servicio digital</p> */}
        </div>
        </div>
      </Link>
      </div>

  
      
      </div>
      {/* fullitems */}
      <div className='full-item'>
      <div className="full-width">
      <Link to="/pines" className="image-link">
      <div className="item-content">
      <img className="img-homefull" src={Pines} alt="Imagen 5" />
      <div className="textfull-width">
          <h3 className='item-title'>Pines</h3>
          <p>Perzonalizaciones</p>
        </div>
        </div>
      </Link>
      </div>

      <div className="full-width">
      <Link to="/servicios-digitales" className="image-link">
      <div className="item-content">
        <img className="img-homefull" src={ServiDigaimge} alt="Imagen 5" />
        <div className="textfull-width">
          <h3 className='item-title'>Impresiones 3D</h3>
          <p>Servicios que solucionan</p>
        </div>
       </div>
       </Link>
       </div>

       </div>
       {/* full items */}
    </div>
    
    
    {/*  */}
    <Footer />
    </div>
    </div>  
    
    
        
    );
}
export {Home};
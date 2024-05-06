import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { DesktopNavigation } from "../../components/DesktopNavigation";
import { ProductCard } from "../../components/cardproducto/ProductCard";
import data from '../../pages/home/data.json';

function Joyeria() {
    return (
      <>
      <Header />
     <div className="Joyeria">
      
      <div className="wrp-pages">
          <div className="gallery-page">
          
          <h2>Joyería</h2>
          <p className="descrio-pages">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
           "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
           <div className="wrp-product"> 
          {data.joyeria.map(product => (
          
          <ProductCard 
                key={product.id}
                title={product.title}
                img={product.img}
                detailsProduct={product.detailproduct} // Ajusta la key según tu estructura JSON
                description={product.description}
          />
          
          ))}
          </div>
          <Footer />
          </div>
        </div>        
     </div>
     </>
    );
  }
  
  export {Joyeria};
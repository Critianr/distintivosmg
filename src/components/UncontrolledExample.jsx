// import Carousel from 'react-bootstrap/Carousel';
import { Carousel, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
// import images from '../assets/notimg.jpeg';
// import Pines from '../../assets/Pinesporvenircamisetanegra.jpg';
import Banner1 from '../assets/img-home/buenafoto.jpg'
// import InsigniasMilitaress from '../../assets/10.jpg';
import Banner2 from '../assets/img-home/good.jpg';
import Banner3 from '../assets/img-home/anillos1.jpg'
import overlay from '../assets/img-home/anillos1.jpg'
import './unCarrosuel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function UncontrolledExample() {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    // Animate the overlay image on slide change
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('slide.bs-carousel', (event) => {
      setAnimationProgress(0); // Reset animation progress on slide change
    });
  }, []);

  return (
    <div className='wrp-carosuel'>
    <Carousel className='carosuel' controls={false}>
    <Carousel.Item className='carosuel-item'>
      <img
        className="d-block"
        src={Banner1}
        alt="First slide"
      />

      <Carousel.Caption className='carosuel-caption' style={{ bottom: '50%', transform: 'translateY(50%)' }}>
      <h3 className='title-bienvenido'>Bienvenido a 2MG DISTINTIVOS</h3>
      <h4 className='eslogan'>Somos los cacaos de la joyería</h4>
      <p className='desc-home'>Nos adaptamos a tus necesidades si estas interesado a en nuestra creación de distintivos para tu empresa consultanos</p>
      <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Te llamamos" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enviar</button>
</div>


      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carosuel-item'>
      <img
        className="d-block"
        src={Banner2}
        alt="Second slide"
      />
      <Carousel.Caption className='carosuel-caption' style={{ bottom: '50%', transform: 'translateY(50%)' }}>
      <h3 className='title-bienvenido'>Bienvenido a 2MG DISTINTIVOS</h3>
      <h4 className='eslogan'>Somos los cacaos de la joyería</h4>
      <p className='desc-home'>Nos adaptamos a tus necesidades si estas interesado a en nuestra creación de distintivos para tu empresa consultanos</p>
      <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Te llamamos" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enviar</button>
</div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carosuel-item'>
      <img
        className="d-block"
        src={Banner3}
        alt="Third slide"
      />
      <Carousel.Caption className='carosuel-caption' style={{ bottom: '50%', transform: 'translateY(50%)' }}>
      <h3 className='title-bienvenido'>Bienvenido a 2MG DISTINTIVOS</h3>
      <h4 className='eslogan'>Somos los cacaos de la joyería</h4>
      <p className='desc-home'>Nos adaptamos a tus necesidades si estas interesado a en nuestra creación de distintivos para tu empresa consultanos</p>
      <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Te llamamos" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enviar</button>
</div>  
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
    // poible 2 mejor
  //   <Carousel controls={false}>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="https://via.placeholder.com/800x400?text=First+slide"
  //       alt="First slide"
  //     />
  //     <Carousel.Caption style={{ bottom: '50%', transform: 'translateY(50%)' }}>
  //       <h3>Titulo del Slide 1</h3>
  //       <Form>
  //         <Form.Group controlId="formName">
  //           <Form.Control type="text" placeholder="Nombre" />
  //         </Form.Group>
  //         <Form.Group controlId="formPhone">
  //           <Form.Control type="text" placeholder="Teléfono" />
  //         </Form.Group>
  //         <Button variant="success">WhatsApp</Button>{' '}
  //         <Button variant="primary">Contacto</Button>
  //       </Form>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="https://via.placeholder.com/800x400?text=Second+slide"
  //       alt="Second slide"
  //     />
  //     <Carousel.Caption style={{ bottom: '50%', transform: 'translateY(50%)' }}>
  //       <h3>Titulo del Slide 2</h3>
  //       <Form>
  //         <Form.Group controlId="formName">
  //           <Form.Control type="text" placeholder="Nombre" />
  //         </Form.Group>
  //         <Form.Group controlId="formPhone">
  //           <Form.Control type="text" placeholder="Teléfono" />
  //         </Form.Group>
  //         <Button variant="success">WhatsApp</Button>{' '}
  //         <Button variant="primary">Contacto</Button>
  //       </Form>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="https://via.placeholder.com/800x400?text=Third+slide"
  //       alt="Third slide"
  //     />
  //     <Carousel.Caption style={{ bottom: '50%', transform: 'translateY(50%)' }}>
  //       <h3>Titulo del Slide 3</h3>
  //       <Form>
  //         <Form.Group controlId="formName">
  //           <Form.Control type="text" placeholder="Nombre" />
  //         </Form.Group>
  //         <Form.Group controlId="formPhone">
  //           <Form.Control type="text" placeholder="Teléfono" />
  //         </Form.Group>
  //         <Button variant="success">WhatsApp</Button>{' '}
  //         <Button variant="primary">Contacto</Button>
  //       </Form>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel>
    // posible 

        // <Carousel>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="https://via.placeholder.com/800x400?text=First+slide"
        //       alt="First slide"
        //     />
        //     <Carousel.Caption style={{ bottom: '50%', transform: 'translateY(50%)' }}>
        //       <h3>Titulo del Slide 1</h3>
        //       <Form>
        //         <Form.Group controlId="formName">
        //           <Form.Control type="text" placeholder="Nombre" />
        //         </Form.Group>
        //         <Form.Group controlId="formPhone">
        //           <Form.Control type="text" placeholder="Teléfono" />
        //         </Form.Group>
        //         <Button variant="success">WhatsApp</Button>{' '}
        //         <Button variant="primary">Contacto</Button>
        //       </Form>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="https://via.placeholder.com/800x400?text=Second+slide"
        //       alt="Second slide"
        //     />
        //     <Carousel.Caption style={{ bottom: '50%', transform: 'translateY(50%)' }}>
        //       <h3>Titulo del Slide 2</h3>
        //       <Form>
        //         <Form.Group controlId="formName">
        //           <Form.Control type="text" placeholder="Nombre" />
        //         </Form.Group>
        //         <Form.Group controlId="formPhone">
        //           <Form.Control type="text" placeholder="Teléfono" />
        //         </Form.Group>
        //         <Button variant="success">WhatsApp</Button>{' '}
        //         <Button variant="primary">Contacto</Button>
        //       </Form>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="https://via.placeholder.com/800x400?text=Third+slide"
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption style={{ bottom: '50%', transform: 'translateY(50%)' }}>
        //       <h3>Titulo del Slide 3</h3>
        //       <Form>
        //         <Form.Group controlId="formName">
        //           <Form.Control type="text" placeholder="Nombre" />
        //         </Form.Group>
        //         <Form.Group controlId="formPhone">
        //           <Form.Control type="text" placeholder="Teléfono" />
        //         </Form.Group>
        //         <Button variant="success">WhatsApp</Button>{' '}
        //         <Button variant="primary">Contacto</Button>
        //       </Form>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel>
  );
}

export default UncontrolledExample;
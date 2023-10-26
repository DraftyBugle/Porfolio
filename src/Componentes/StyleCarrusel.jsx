import { Swiper, SwiperSlide } from 'swiper/react';

import Proyecto1 from "../Componentes/Proyecto1"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./StyleCarrusel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function StyleCarrusel (){
    return(
        <div>


      <Swiper 
spaceBetween={30}
centeredSlides={true}

pagination={{
  clickable: true,
}}
navigation={true}
modules={[ Pagination, Navigation]}
className="Mi_carrusel"
>
  <div className='CardProyect'>
 
<SwiperSlide>
  
<Proyecto1/>

  </SwiperSlide>


</div>
<SwiperSlide></SwiperSlide>
<SwiperSlide></SwiperSlide>

</Swiper>

        </div>
    )
}

export default StyleCarrusel;


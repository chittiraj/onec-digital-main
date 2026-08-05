// import "./HeroSlider.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import hero1 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";
// import hero2 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";
// import hero3 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";
// import hero4 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";

// function HeroSlider() {

//     const images = [
//         hero1,
//         hero2,
//         hero3,
//         hero4
//     ];

//     return (

//         <section className="hero-slider">

//             <Swiper
//                 modules={[Autoplay, Pagination]}
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: false
//                 }}
//                 pagination={{ clickable: true }}
//                 loop={true}
//             >

//                 {images.map((image, index) => (

//                     <SwiperSlide key={index}>

//                         <div className="hero-slide">

//                             <img
//                                 src={image}
//                                 alt="Indian Sweets"
//                                 className="hero-bg"
//                             />

//                             <div className="hero-overlay"></div>

//                         </div>

//                     </SwiperSlide>

//                 ))}

//             </Swiper>

//             {/* STATIC CONTENT */}

//             <div className="hero-content">

//                 <span className="hero-badge">
//                     Traditional Taste
//                 </span>

//                 <h1>
//                     Authentic Indian <br />
//                     Sweets
//                 </h1>

//                 <p>
//                     Experience handcrafted Indian sweets prepared with
//                     premium ingredients and traditional recipes.
//                     Freshly made and delivered across India.
//                 </p>

//                 <div className="hero-buttons">

//                     <button className="primary-btn">
//                         Shop Now
//                     </button>

//                     <button className="secondary-btn">
//                         Explore Collection
//                     </button>

//                 </div>

//             </div>

//         </section>

//     );
// }

// export default HeroSlider;



export default function Home() {

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-black text-white p-6">
            
        </div>

    )
}


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Container from "../../components/container/Container";
// import ProductItem from "../../components/productItem/ProductItem";
// import { getProducts } from "../../services/api";
// import { IProduct } from "../../types/Servers";

// // Swiper imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function Home() {
//   const [products, setProducts] = useState<IProduct[]>([]);

//   useEffect(() => {
//     getProducts().then((result) => {
//       setProducts(result);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 text-black py-10">
//       <Container>
//         <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>

//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {products.slice(0, 6).map((item) => (
//             <SwiperSlide key={item.id}>
//               <Link to={`/Product/${item.id}`}>
//                 <ProductItem {...item} />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="mt-10 text-center">
//           <Link
//             to="/store"
//             className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//           >
//             View All Products
//           </Link>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;

    /** @format */

    import Head from "next/head"; // se utiliza para importar módulos de otros archivos en un componente de React .
    import Container from "../components/container";
    import Layout from "../components/layout";
    import Store from "../components/Stores";
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css"; //  importa los estilos CSS de una biblioteca
    import "swiper/css/navigation"; //axios aprender
    import "swiper/css/pagination";
    import "swiper/css/scrollbar";
    import "swiper/css/autoplay";

    const Index = () => {
    return (
        <div>
        <Head />
        <Container />
        <Layout>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <img src="/img/picture2.png" width="auto" height="auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/img/picture3.png" width="auto" height="auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/img/picture4.png" width="auto" height="auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/img/picture5.png" width="auto" height="auto" />
            </SwiperSlide>
            </Swiper>
            <Store />
        </Layout>
        </div>
    );
    };
    export default Index;

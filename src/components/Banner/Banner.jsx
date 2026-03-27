import React from "react";
import { Box } from "@mui/material";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Box sx={{ width: "100%", borderRadius: "10px", overflow: "hidden", mb: 2 }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/ecommerce-website-banner-design_1281315-5302.jpg?w=996" alt="banner1" style={styles.img} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="banner2" style={styles.img} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/ecommerce-website-banner-design_1281315-1759.jpg?w=2000" alt="banner3" style={styles.img} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

const styles = {
  img: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
};

export default Banner;
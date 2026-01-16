"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Fresh Organic Vegetables",
    subtitle: "Up to 30% OFF",
    desc: "Get farm-fresh organic vegetables delivered to your doorstep within 30 minutes.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920",
    btnText: "Shop Vegetables",
    link: "/items"
  },
  {
    id: 2,
    title: "Daily Essential Groceries",
    subtitle: "Best Prices Guaranteed",
    desc: "Stock up your kitchen with high-quality grains, oils, and household essentials.",
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11499/3b360279-8b43-40f3-9b11-604749128187.jpg",
    btnText: "Explore Essentials",
    link: "/items"
  },
  {
    id: 3,
    title: "Fresh Fruits Collection",
    subtitle: "100% Natural & Healthy",
    desc: "Nature's candy for your family. Enjoy seasonal fruits picked from the best orchards.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1920",
    btnText: "Order Fruits",
    link: "/items"
  }
];

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-full w-full flex items-center bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
            >
              <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-2xl text-white space-y-6">
                  <span className="bg-primary text-primary-content px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 max-w-lg">
                    {slide.desc}
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Link href={slide.link} className="btn btn-primary btn-lg px-8 rounded-full">
                      {slide.btnText}
                    </Link>
                    <Link href="/about" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-black px-8 rounded-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for Swiper navigation arrows to match DaisyUI */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(255,255,255,0.1);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          backdrop-filter: blur(5px);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #22c55e !important; /* Tailwind green-500 (Primary color) */
          width: 25px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
}
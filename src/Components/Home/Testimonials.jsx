"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Rahat Islam",
    role: "Regular Buyer",
    image: "https://i.pravatar.cc/150?u=rahat",
    review: "The quality of organic mangoes I ordered was exceptional. FreshUp truly delivers what they promise in terms of freshness and speed.",
    rating: 5
  },
  {
    id: 2,
    name: "Samantha Reed",
    role: "Home Chef",
    image: "https://i.pravatar.cc/150?u=samantha",
    review: "As a professional chef, I'm very picky about my herbs. FreshUp's farm-to-table service ensures I always get the best aromatic basil and parsley.",
    rating: 5
  },
  {
    id: 3,
    name: "David Miller",
    role: "Fitness Coach",
    image: "https://i.pravatar.cc/150?u=david",
    review: "Their dairy-free collection and organic oats are staple in my diet. The delivery tracking is highly accurate and very convenient for busy days.",
    rating: 5
  },
  {
    id: 4,
    name: "Anika Tabassum",
    role: "Mother of Two",
    image: "https://i.pravatar.cc/150?u=anika",
    review: "I feel safe feeding my children the pesticide-free vegetables from FreshUp. The customer support team is incredibly helpful and polite.",
    rating: 5
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Tech Entrepreneur",
    image: "https://i.pravatar.cc/150?u=james",
    review: "The app interface is top-notch. I love how I can reorder my weekly grocery essentials with just one click using the FreshUp dashboard.",
    rating: 4
  },
  {
    id: 6,
    name: "Sophia Martinez",
    role: "Loyal Customer",
    image: "https://i.pravatar.cc/150?u=sophia",
    review: "Fastest delivery in the city! I received my eggs and bakery items within 25 minutes, and everything was perfectly intact and fresh.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="mt-20 pt-10 rounded-2xl bg-base-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Customer Reviews</span>
          <h2 className="text-3xl md:text-5xl font-black text-base-content mt-3">
            Real Feedback from Our <span className="text-primary">FreshUp</span> Community
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-base-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-transparent hover:border-primary/10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-orange-400 text-sm" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-4xl text-primary opacity-20" />
                </div>

                <p className="text-gray-600 text-lg italic leading-relaxed mb-10 flex-grow">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-base-200">
                  <div className="avatar">
                    <div className="w-14 h-14 rounded-2xl ring-2 ring-primary ring-offset-2">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-base-content leading-none mb-1">{item.name}</h4>
                    <p className="text-sm text-primary font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: var(--p) !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
}
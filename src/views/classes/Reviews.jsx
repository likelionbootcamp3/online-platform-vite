import Container from "../../components/common/Container";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { breakpoints } from "../../constants";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import HeadingBox from "../../components/common/HeadingBox";

const reviewData = [
  {
    id: 1,
    title:
      "A course that can improve both development knowledge and practical skills",
    description:
      "Minus quaerat labore ipsam laboriosam iusto Minus quaerat labore ipsam laboriosam iusto, modi fugit aliquam delectus fuga sit incidunt numquam consequuntur culpa facere qui tempore libero laudantium quibusdam.",
    author: "Front-end school 1st class students",
  },
  {
    id: 2,
    title: "Valuable experience of growing together with colleagues",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, sapiente. Maxime, quo nisi harum non veritatis tenetur vitae corporis unde magni laudantium culpa quibusdam neque, totam odit officia dicta voluptate.",
    author: "Students of the 2nd class",
  },
  {
    id: 3,
    title: "Carefully designed curriculum and student care system",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. sequatur fugiat sequi quidem nulla explicabo.",
    author: "Students of the 2nd class",
  },
  {
    id: 4,
    title:
      "I feel like this is a really good stepping stone for my future journey.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit a et doloremque perferendis quis! Nisi ipsa dolore maxime nulla eos, aut iste sunt at magnam natus! Voluptatibus voluptatum culpa facilis!",
    author: "Front-end school 1st class students",
  },
  {
    id: 5,
    title:
      "I feel like this is a really good stepping stone for my future journey.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit a et doloremque perferendis quis! Nisi ipsa dolore maxime nulla eos, aut iste sunt at magnam natus! Voluptatibus voluptatum culpa facilis!",
    author: "Front-end school 1st class students",
  },
  {
    id: 6,
    title:
      "I feel like this is a really good stepping stone for my future journey.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit a et doloremque perferendis quis! Nisi ipsa dolore maxime nulla eos, aut iste sunt at magnam natus! Voluptatibus voluptatum culpa facilis!",
    author: "Front-end school 1st class students",
  },
  {
    id: 7,
    title:
      "I feel like this is a really good stepping stone for my future journey.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit a et doloremque perferendis quis! Nisi ipsa dolore maxime nulla eos, aut iste sunt at magnam natus! Voluptatibus voluptatum culpa facilis!",
    author: "Front-end school 1st class students",
  },
  {
    id: 8,
    title:
      "I feel like this is a really good stepping stone for my future journey.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit a et doloremque perferendis quis! Nisi ipsa dolore maxime nulla eos, aut iste sunt at magnam natus! Voluptatibus voluptatum culpa facilis!",
    author: "Front-end school 1st class students",
  },
];

const ReviewCard = ({ title, description, author }) => {
  return (
    <li className="flex h-full flex-col gap-3 rounded-2xl border border-gray-300 bg-white px-4 py-6">
      {/* Title */}
      <div className="flex flex-col gap-2 text-blue-800">
        <ImQuotesLeft size={24} />
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <div className="grow border-t border-[#d4d4d4] py-3">
        <p className="text-sm">{description}</p>
      </div>

      {/* Author */}
      <div className="text-xs text-gray-500">{author}</div>
    </li>
  );
};

const ReviewsSwiper = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <ul className="relative">
      {/* Reviews Swiper */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={24}
        navigation={{ prevEl, nextEl }}
        modules={[Navigation]}
        speed={600}
        breakpoints={{
          [breakpoints.md]: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          [breakpoints.lg]: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {reviewData.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <ReviewCard {...review} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Swiper button */}
      <div className="hidden lg:block">
        <div ref={(node) => setPrevEl(node)}>
          <div className="absolute top-1/2 left-0 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-3xl shadow">
            <BiChevronLeft />
          </div>
        </div>
        <div ref={(node) => setNextEl(node)}>
          <div className="absolute top-1/2 right-0 z-10 translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-3xl shadow">
            <BiChevronRight />
          </div>
        </div>
      </div>
    </ul>
  );
};

const Reviews = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <Container>
        <div className="py-20">
          {/* Heading */}
          <HeadingBox
            subheading={"Training goal"}
            heading={"Stories of people who reached their goals first"}
            description={
              "Taking one step towards my dream is very difficult. If you are hesitant to start, meet the stories of people who first achieved their dreams at Tekit KDT."
            }
          />
          <ReviewsSwiper />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;

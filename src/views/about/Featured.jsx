import clsx from "clsx";
import Container from "../../components/common/Container";

const featuredList = [
  {
    id: 1,
    imgSrc: "https://www.likelion.net/img/core_img1_v2.png",
    subheading: "New opportunity",
    heading: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa totam earum corrupti, minima dolorem provident tempora labore? Alias nobis ut dolor soluta quas? Dolorem?",
  },
  {
    id: 2,
    imgSrc: "https://www.likelion.net/img/core_img1_v2.png",
    subheading: "New opportunity",
    heading: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa totam earum corrupti, minima dolorem provident tempora labore? Alias nobis ut dolor soluta quas? Dolorem?",
  },
  {
    id: 3,
    imgSrc: "https://www.likelion.net/img/core_img1_v2.png",
    subheading: "New opportunity",
    heading: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa totam earum corrupti, minima dolorem provident tempora labore? Alias nobis ut dolor soluta quas? Dolorem?",
  },
];

const FeaturedRow = ({
  imgSrc,
  subheading,
  heading,
  description,
  reverse = false,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col",
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Image */}
      <div className="aspect-[2/1] flex-1 md:aspect-[5/3]">
        <img
          src={imgSrc}
          className="h-full w-full object-cover"
          alt={heading}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center md:justify-center">
        <div className="max-w-[65%] p-4 md:max-w-[75%]">
          <p className="mb-4 text-sm font-bold uppercase text-neutral-400 lg:mb-6 lg:text-base xl:text-lg">
            {subheading}
          </p>
          <h3 className="mb-2 text-2xl font-semibold lg:mb-3 lg:text-3xl xl:mb-4 xl:text-4xl">
            {heading}
          </h3>
          <p className="text-sm leading-normal lg:text-base xl:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <section>
      <Container>
        <div className="-mx-4 flex flex-col gap-24 py-20 md:mx-0">
          {featuredList.map((featured, i) => (
            <FeaturedRow
              key={featured.id}
              imgSrc={featured.imgSrc}
              heading={featured.heading}
              subheading={featured.subheading}
              description={featured.description}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Featured;

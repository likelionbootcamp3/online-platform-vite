import moment from "moment";
import Container from "../../components/common/Container";

const mediaData = [
  {
    id: 1,
    snippet: {
      title:
        "Likelion, holding a hackathon based on Nexon and content making platform",
      url: "https://www.likelion.net/img/media_img1.png",
      brand: "Techit",
      description:
        "Likelion, a programming education brand, we will host 'MapleStory Worlds X Super Hackathon 2022' with global game company NEXON. ",
      author: "Edaily",
      date: new Date("2022-03-25"),
    },
  },
  {
    id: 2,
    snippet: {
      title: "Likelion, global launch of NFT project 'Thread'",
      url: "https://www.likelion.net/img/media_img2.png",
      brand: "Styltare",
      description:
        "Likelion (CEO Lee Doo-hee) announced on the 19th that the domestic non-fungible token (NFT) project 'SYLTARE' was globally launched on the 18th. ",
      author: "Electronic Newspaper ",
      date: new Date("2022-03-25"),
    },
  },
  {
    id: 3,
    snippet: {
      title:
        "'Hyundai Card-Likelion', established a joint venture for NFT business",
      url: "https://www.likelion.net/img/media_img3.png",
      brand: "Modern Lion",
      description:
        "Hyundai Card and global programming education brand 'Like a Stylish Lion' announced on the 7th that they would establish a joint venture (JV) to promote a new NFT (Non-Fungible Token) business.",
      author: "Herald Economy",
      date: new Date("2022-03-25"),
    },
  },
  {
    id: 4,
    snippet: {
      title: "Take a look at the Meta Kongz Holder Party, from entry to exit",
      url: "https://www.likelion.net/img/media_img4.png",
      brand: "Meta Kongz",
      description:
        "Take a look at the Meta Kongz Holder Party, from entry to exit",
      author: "CoinDesk Korea",
      date: new Date("2022-03-25"),
    },
  },
];

const MediaCard = ({ title, url, brand, description, author, date }) => {
  return (
    <li>
      <a href="#" className="flex h-full flex-col bg-[#F5F5F5]">
        <div className="aspect-[227/141]">
          {/* Image */}
          <img src={url} alt={brand} className="object-fit h-full w-full" />
        </div>
        <div className="flex flex-grow flex-col py-3 px-4">
          {/* Title */}
          <div className="flex-grow md:flex-grow-0">
            <h4 className="text-sm font-semibold leading-normal md:text-lg">
              {title}
            </h4>
          </div>

          {/* Description */}
          <div className="flex-grow">
            <p className="mt-1 hidden text-base text-[#737373] md:line-clamp-3">
              {description}
            </p>
          </div>

          <hr className="my-2 border-[#D4D4D4]" />

          {/* Author and Date */}
          <div className="flex flex-col text-xs text-[#A3A3A3] md:flex-row md:items-center">
            <div className="flex items-center">
              {author}
              <span className="mx-1 h-2.5 w-px bg-[#A3A3A3]"></span>
            </div>
            <span>{moment(date).format("YYYY.MM.DD")}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

const Media = () => {
  return (
    <section>
      <Container>
        <div className="py-20">
          {/* Title */}
          <div className="md:text-center">
            <h5 className="mb-4 text-sm font-semibold uppercase text-[#FF7710] lg:mb-5 lg:text-lg">
              likelion media
            </h5>

            <h3 className="text-3xl font-semibold lg:text-4xl">
              LIKELION in the press
            </h3>
          </div>

          {/* Media Grid */}
          <ul className="mt-12 grid w-full grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {/* TODO: Map media data here! */}
            {mediaData.map((media) => {
              return <MediaCard key={media.id} {...media.snippet} />;
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Media;

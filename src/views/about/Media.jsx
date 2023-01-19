import Container from "../../components/common/Container";

const mediaData = [
  {
    id: 1,
    title:
      "Likelion, holding a hackathon based on Nexon and content making platform",
    imageSrc: "",
    brand: "Likelion",
    description:
      "Likelion, a programming education brand, we will host 'MapleStory Worlds X Super Hackathon 2022' with global game company NEXON.",
    author: "",
    date: "",
  },
  {
    id: 2,
    title:
      "Likelion, holding a hackathon based on Nexon and content making platform",
    imageSrc: "",
    description:
      "Likelion, a programming education brand, we will host 'MapleStory Worlds X Super Hackathon 2022' with global game company NEXON.",
    author: "",
    date: "",
  },
  {
    id: 3,
    title:
      "Likelion, holding a hackathon based on Nexon and content making platform",
    imageSrc: "",
    description:
      "Likelion, a programming education brand, we will host 'MapleStory Worlds X Super Hackathon 2022' with global game company NEXON.",
    author: "",
    date: "",
  },
  {
    id: 4,
    title:
      "Likelion, holding a hackathon based on Nexon and content making platform",
    imageSrc: "",
    description:
      "Likelion, a programming education brand, we will host 'MapleStory Worlds X Super Hackathon 2022' with global game company NEXON.",
    author: "",
    date: "",
  },
];

const Media = () => {
  return (
    <section>
      <Container>
        {/* TODO: CREATE MEDIA SECTION */}
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
            <li>
              <a href="#" className="flex h-full flex-col bg-[#F5F5F5]">
                <div className="aspect-[227/141]">
                  {/* Image */}
                  <img
                    src="https://kiranworkspace.com/wp-content/uploads/2020/12/ellipsis-multiline-css.png"
                    alt=""
                    className="object-fit h-full w-full"
                  />
                </div>
                <div className="flex flex-grow flex-col py-3 px-4">
                  {/* Title Item */}
                  <div className="flex-grow md:flex-grow-0">
                    <h4 className="text-sm font-semibold leading-normal md:text-lg">
                      Likelion, holding a hackathon based
                    </h4>
                  </div>

                  {/* Detail Item */}
                  <div className="flex-grow">
                    <p className="mt-1 hidden text-base text-[#737373] md:line-clamp-3">
                      Likelion, a programming education brand, we will host
                      'MapleStory Worlds X Super Hackathon 2022' with global
                      game company NEXON.
                    </p>
                  </div>

                  <hr className="my-2 border-[#D4D4D4]" />

                  {/* Author and Date */}
                  <div className="flex flex-col text-xs text-[#A3A3A3] md:flex-row md:items-center">
                    <div className="flex items-center">
                      Edaily
                      <span className="mx-1 h-2.5 w-px bg-[#A3A3A3]"></span>
                    </div>
                    <span>2022.08.18</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Media;

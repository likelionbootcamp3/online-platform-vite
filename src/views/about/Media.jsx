import Container from "../../components/common/Container";

const Media = () => {
  return (
    <section>
      <Container>
        {/* TODO: CREATE MEDIA SECTION */}
        <div className="md:flex md:flex-col md:items-center">
          {/* Title */}
          <h5 className="mb-4 text-sm font-semibold uppercase text-[#FF7710] lg:mb-5 lg:text-lg">
            likelion media
          </h5>

          <h3 className="text-3xl font-semibold lg:text-4xl">
            LIKELION in the press
          </h3>

          {/* Items */}
          <ul className="mt-12 grid h-full w-full auto-cols-max grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {/* Item 1 */}
            <li>
              <a href="#" className="flex h-full flex-col bg-[#F5F5F5]">
                <div className="h-auto w-full bg-[#E7E5E4]">
                  {/* Image */}
                  <img
                    src="https://www.likelion.net/img/media_img1.png"
                    alt=""
                  />
                </div>
                <div className="flex h-full flex-col justify-between self-stretch py-3 px-4">
                  {/* Title Item */}
                  <h4 className="text-sm font-semibold leading-normal md:text-lg">
                    Likelion, holding a hackathon based on Nexon and content
                    making platform
                  </h4>

                  {/* Detail Item */}
                  <p className="mt-1 mb-auto overflow-hidden text-ellipsis text-base text-[#737373]">
                    Likelion, a programming education brand, we will host
                    'MapleStory Worlds X Super Hackathon 2022' with global game
                    company NEXON.
                  </p>

                  <hr className="my-2 border-[#D4D4D4]" />

                  {/* Author and Date */}
                  <p className="flex flex-col text-xs leading-normal text-[#A3A3A3] md:flex-row">
                    <span>
                      Edaily
                      <span className="mx-1 inline-block h-2.5 w-px bg-[#A3A3A3]"></span>
                    </span>
                    <span>2022.08.18</span>
                  </p>
                </div>
              </a>
            </li>

            {/* Item 2 */}
            <li>
              <a href="#" className="flex h-full flex-col bg-[#F5F5F5]">
                <div className="h-auto w-full bg-[#E7E5E4]">
                  {/* Image */}
                  <img
                    src="https://www.likelion.net/img/media_img2.png"
                    alt=""
                  />
                </div>
                <div className="flex h-full flex-col justify-between self-stretch py-3 px-4">
                  {/* Title Item */}
                  <h4 className="text-sm font-semibold leading-normal md:text-lg">
                    Likelion, global launch of NFT project 'Thread'
                  </h4>

                  {/* Detail Item */}
                  <p className="mt-1 mb-auto overflow-hidden text-ellipsis text-base text-[#737373]">
                    LikeLion (CEO Lee Doo-hee) announced on the 19th that the
                    domestic non-fungible token (NFT) project 'SYLTARE' was
                    globally launched on the 18th.
                  </p>

                  <hr className="my-2 border-[#D4D4D4]" />

                  {/* Author and Date */}
                  <p className="flex flex-col text-xs leading-normal text-[#A3A3A3] md:flex-row">
                    <span>
                      Electronic Newspaper
                      <span className="mx-1 inline-block h-2.5 w-px bg-[#A3A3A3]"></span>
                    </span>
                    <span>2022.08.19</span>
                  </p>
                </div>
              </a>
            </li>

            {/* Item 3 */}
            <li>
              <a href="#" className="flex h-full flex-col bg-[#F5F5F5]">
                <div className="h-auto w-full bg-[#E7E5E4]">
                  {/* Image */}
                  <img
                    src="https://www.likelion.net/img/media_img3.png"
                    alt=""
                  />
                </div>
                <div className="flex h-full flex-col justify-between self-stretch py-3 px-4">
                  {/* Title Item */}
                  <h4 className="text-sm font-semibold leading-normal md:text-lg">
                    'Hyundai Card-Likelion', established a joint venture for NFT
                    business
                  </h4>

                  {/* Detail Item */}
                  <p className="mt-1 mb-auto overflow-hidden text-ellipsis text-base text-[#737373]">
                    Hyundai Card and global programming education brand
                    'LikeLion' announced on the 7th that they would establish a
                    joint venture (JV) to promote a new NFT (Non-Fungible Token)
                    business.
                  </p>

                  <hr className="my-2 border-[#D4D4D4]" />

                  {/* Author and Date */}
                  <p className="flex flex-col text-xs leading-normal text-[#A3A3A3] md:flex-row">
                    <span>
                      Herald Economy
                      <span className="mx-1 inline-block h-2.5 w-px bg-[#A3A3A3]"></span>
                    </span>
                    <span>2022.06.07</span>
                  </p>
                </div>
              </a>
            </li>

            {/* Item 4 */}
            <li>
              <a href="#" className="flex h-full flex-col bg-[#F5F5F5]">
                <div className="h-auto w-full bg-[#E7E5E4]">
                  {/* Image */}
                  <img
                    src="https://www.likelion.net/img/media_img4.png"
                    alt=""
                  />
                </div>
                <div className="flex h-full flex-col justify-between self-stretch py-3 px-4">
                  {/* Title Item */}
                  <h4 className="text-sm font-semibold leading-normal md:text-lg">
                    Take a look at the Meta Kongz Holder Party, from entry to
                    exit
                  </h4>
                  {/* Detail Item */}
                  <p className="mt-1 mb-auto overflow-hidden text-ellipsis text-base text-[#737373]">
                    An on-site party for holders (holders) of the non-fungible
                    token (NFT) project Metaconz was held on the 9th at 6pm on
                    the 2nd floor of Floating Island, Floating Island.
                  </p>

                  <hr className="my-2 border-[#D4D4D4]" />

                  {/* Author and Date */}
                  <p className="flex flex-col text-xs leading-normal text-[#A3A3A3] md:flex-row">
                    <span>
                      CoinDesk Korea
                      <span className="mx-1 inline-block h-2.5 w-px bg-[#A3A3A3]"></span>
                    </span>
                    <span>22022.06.12</span>
                  </p>
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

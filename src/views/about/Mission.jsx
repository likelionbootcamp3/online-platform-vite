import Container from "../../components/common/Container";

const Mission = () => {
  return (
    <section className="bg-orange-500">
      <Container>
        <div className="flex h-80 flex-col items-center justify-center md:h-96 lg:h-[36rem]">
          <p className="mb-4 text-center text-sm font-bold md:mb-5 md:text-base lg:mb-6 lg:text-lg">
            BRAND MISSION
          </p>
          <h2 className="px-10 text-center text-base font-semibold md:px-36 md:text-lg lg:px-52 lg:text-2xl">
            Chúng tôi góp phần cùng bạn kiến tạo nên ngày hôm nay gần nhất với
            tương lai của bạn. Xuất phát từ nền tảng kinh nghiệm trong giáo dục
            công nghệ dành cho những người dám ước mơ, kết hợp cùng năng lực của
            LIKELION hứa hẹn sẽ cùng bạn tạo nên một cộng đồng và hệ sinh thái
            Web3 đầy tiềm lực.
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default Mission;

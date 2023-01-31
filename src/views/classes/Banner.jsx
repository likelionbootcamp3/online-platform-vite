import Container from "../../components/common/Container";

const Banner = () => {
  return (
    <section className="bg-banner-classes-sm bg-cover bg-center md:bg-banner-classes-lg">
      <Container>
        <div className="flex h-[292px] md:h-[310px] md:items-center xl:h-[400px]">
          <div className="max-w-sm py-6 md:max-w-md xl:max-w-none">
            <h2 className="text-xl font-semibold leading-tight md:text-2xl xl:text-[32px]">
              VOD class
            </h2>
            <p className="mt-2 whitespace-pre-wrap text-sm md:text-base xl:mt-6 xl:text-lg">
              It contains all of the 10 years of education know-how that Tekit
              has accumulated.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

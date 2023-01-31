import Container from "../../components/common/Container";
import HeadingBox from "../../components/common/HeadingBox";
import ClassCard from "../../components/common/ClassCard";
import { videos } from "../home/ClassGrid";

const Videos = () => {
  return (
    <section>
      <Container>
        {/* TODO: CREATE VIDEOS */}
        <div className="py-10">
          <HeadingBox
            subheading="Class"
            heading="Basic: Lorem, ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />

          <ul className="mt-4 grid w-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
            {videos.map((item) => (
              <ClassCard key={item.id} video={item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Videos;

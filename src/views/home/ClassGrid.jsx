import ClassCard from "../../components/common/ClassCard";
import Container from "../../components/common/Container";
import HeadingBox from "../../components/common/HeadingBox";

const videos = [
  {
    id: 1,
    snippet: {
      title: "Front End School",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 200000,
      thumbnail: {
        url: "./src/views/home/assets/01.jpg",
      },
    },
  },
  {
    id: 2,
    snippet: {
      title: "Back End School",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      price: 300000,
      thumbnail: {
        url: "./src/views/home/assets/02.jpg",
      },
    },
  },
  {
    id: 3,
    snippet: {
      title: "App School",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: 400000,
      thumbnail: {
        url: "./src/views/home/assets/03.jpg",
      },
    },
  },
  {
    id: 4,
    snippet: {
      title: "Blockchain School",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      price: 500000,
      thumbnail: {
        url: "./src/views/home/assets/04.jpg",
      },
    },
  },
  {
    id: 5,
    snippet: {
      title: "AI School",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 600000,
      thumbnail: {
        url: "./src/views/home/assets/05.jpg",
      },
    },
  },
];

const Clasess = () => {
  return (
    <section>
      <Container>
        <HeadingBox
          subheading="all educational experiences"
          heading="A new education tapped by Tekit"
          description="Meet all the new education you need for growth."
        />

        <ul className="mt-4 grid w-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
          {videos.map((item) => (
            <ClassCard key={item.id} video={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Clasess;

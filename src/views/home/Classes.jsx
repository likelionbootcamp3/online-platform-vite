import { useEffect, useState } from "react";
import Container from "../../components/common/Container";
import VideoCard from "../../components/common/VideoCard/VideoCard";

const Clasess = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([
      {
        id: 1,
        snippet: {
          title: "Front End School",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 600000,
          thumbnail: {
            url: "./src/views/home/assets/05.jpg",
          },
        },
      },
    ]);
  }, []);

  return (
    <section>
      <Container>
        {/* TODO: CREATE CLASSES */}
        <div className="max-w-7xl px-0">
          <p className="mb-1 text-sm font-semibold text-yellow-500">
            TECHIT KDT School
          </p>
          <h2 className="text-xl font-bold">Bla bla</h2>
        </div>

        <ul className="mt-4 grid w-full max-w-7xl grid-cols-2 gap-4 gap-y-6 md:grid-cols-4">
          {videos.map((item) => (
            <VideoCard key={item.id} video={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Clasess;

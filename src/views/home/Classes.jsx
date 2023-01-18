import Container from "../../components/common/Container";

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

const VideoCard = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnail.url} alt="" />
      <div>
        <h5 class="mt-4 mb-2 text-base font-semibold">{video.snippet.title}</h5>
        <p class="text-xs font-medium">{video.snippet.description}</p>
        <div class="my-2.5">
          <span class="text-sm font-semibold">
            {video.snippet.price.toLocaleString()} VND
          </span>
        </div>
      </div>
    </li>
  );
};

const Clasess = () => {
  return (
    <section>
      <Container>
        {/* TODO: CREATE CLASSES */}
        <div>
          <p className="mb-1 text-sm font-semibold text-yellow-500">
            TECHIT KDT School
          </p>
          <h2 className="text-xl font-bold">Bla bla</h2>
        </div>

        <ul className="mt-4 grid w-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
          {videos.map((item) => (
            <VideoCard key={item.id} video={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Clasess;

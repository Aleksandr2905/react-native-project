import forest from "../../assets/images/forest.jpg";
import sea from "../../assets/images/sea.jpg";
import house from "../../assets/images/house.jpg";

export const posts = [
  {
    id: 1,
    photo: forest,
    title: "Ліс",
    comments: 8,
    likes: 153,
    country: "Ukraine",
    location: { latitude: 50.4510494, longitude: 30.5135938 },
  },
  {
    id: 2,
    photo: sea,
    title: "Захід на Чорному морі",
    comments: 3,
    likes: 200,
    country: "Ukraine",
    location: { latitude: 50.4510494, longitude: 30.5135938 },
  },
  {
    id: 3,
    photo: house,
    title: "Старий будиночок у Венеції",
    comments: 50,
    likes: 200,
    country: "Italy",
    location: { latitude: 41.9099533, longitude: 12.3711901 },
  },
];

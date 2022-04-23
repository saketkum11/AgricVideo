import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Indian Farming",
    title: "New Business Model | Indian Farmer",
    profile: "https://i.ytimg.com/vi/Z1uh3H8evSw/hqdefault.jpg",
    thumbnail: "https://i.ytimg.com/vi/OqREBOP7A0I/hq720.jpg",
  },

  {
    _id: uuid(),
    categoryName: "Indian Farming",
    title: "Honey Bee Farming Business Profit",
    thumbnail: "https://i.ytimg.com/vi/gjMAmo7v1D8/hq720.jpg",
    profile: "",
  },
  {
    _id: uuid(),
    categoryName: "",
    title: "Growing Tomatoes Indoors With 94% Less Water And No Soil",
    thumbnail: "https://i.ytimg.com/vi/5Fq6PQl7fr8/hq720.jpg",
    profile: "",
  },
  {
    _id: uuid(),
    categoryName: "",
    title:
      "This farmer Has won Best Farmer Award | Best Integrated Farm | Balakila Shivananda Organic Farm",
    thumbnail: "https://i.ytimg.com/vi/9AnwOAvp0sE/hq720.jpg",
    profile:
      "https://yt3.ggpht.com/ytc/AKedOLS-6X_T4AF3-bmg1v6HuOvGxIGL_tR9oNZaZw6Bxw=s176-c-k-c0x00ffffff-no-rj",
  },
];

import culture from "./assest/culture.jpg";
import annualDay from "./assest/annualDay.jpg";
import science from "./assest/science.jpg";

export const CarouselData = [
  {
    img: annualDay,
    para: "Annual Sports Day - Celebrating Excellence in Sports"
  },
  {
    img: science,
    para: "Science Exhibition - Showcasing Student Innovations"
  },
  {
    img: culture,
    para: "Cultural Fest - Embracing Diversity and Creativity"
  }
];

export const CarouselDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      
    
      resolve({  CarouselData: [
        {
          img: annualDay,
          para: "Annual Sports Day - Celebrating Excellence in Sports"
        },
        {
          img: science,
          para: "Science Exhibition - Showcasing Student Innovations"
        },
        {
          img: culture,
          para: "Cultural Fest - Embracing Diversity and Creativity"
        }
      ]});
    }, 3000);
  });
};
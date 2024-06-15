import React from 'react';
import CarouselElement from './CarouselElement'; 
import StandardImageList from '../components/StandardImageList';
import ThreeImagesStack from '../components/ThreeImagesStack';
import Aban from '../components/Aban';
// import Navv from '../components/nav/Navba.js'
const HomePage = () => {
  const images = [
    { url: '/images/glossbg.jpg', title: 'Lip Care',text:"Try out our efficacious Lip Care essentials" },
    { url: '/images/handcare.jpg', title: 'Hand Care',text:"Embrace your inner child with our Hand Care Range" },
    { url: '/images/bath.jpg', title: 'Bath Care',text:"Self love is just one step away with our Bath Care Range" },
    { url: '/images/webp/bodycarebg.webp', title: 'Body Care',text:"Give all the love you deserve, try our Body Care Range" },
    { url: '/images/glossbg.jpg', title: 'Lip Care',text:"Try out our efficacious Lip Care essentials" },
    // Add more image objects here
  ];
  const imagesStack = [
    {
      src: '/images/water1.jpg',
      alt: 'Image 1',
      text: 'Cleansers',
      buttonLink: '/path/to/button1',
      buttonText: 'shop now',
    },
    {
      src: '/images/water2.jpg',
      alt: 'Image 1',
      text: 'Lip gloss',
      buttonLink: '/path/to/button1',
      buttonText: 'shop now',
    },
    {
      src: '/images/serumwater.jpg',
      alt: 'Image 1',
      text: 'Body & Bath',
      buttonLink: '/path/to/button1',
      buttonText: 'shop now',
    },
  
    // Add more image objects here
  ];
  const imagesStack2 = [
    {
      src: '/images/water6.jpg',
      alt: 'Image 1',
      text: 'Brow Oils',
      buttonLink: '/path/to/button1',
      buttonText: 'shop now',
    },
    {
      src: '/images/water5.jpg',
      alt: 'Image 1',
      text: 'Palm Creams',
      buttonLink: '/path/to/button1',
      buttonText: 'shop now',
    },
    {
      src: '/images/pinkwater.jpg',
      alt: 'Image 1',
      text: 'Serums',
      buttonLink: '/path/to/button1',
      buttonText: 'shop now',
    },
  
    // Add more image objects here
  ];
  // const imgbaner1=[{
  //   url:'/images/badypos.jpg',
  //   description:" Immerse yourself in our ethereal haven, where self-care is an exquisite art. Discover Shop All's captivating collection of soul-nurturing treasures for your blissful well-being.",
  //   title:"LOVING YOURSELF MULTIPLIES FROM HERE",
  // },];
  return (
  <> <div>
 
 <CarouselElement images={images} />
 <br />
 
  <Aban url={'/images/navimg1.jpg'} description={"Immerse yourself in our ethereal haven, where self-care is an exquisite art. Discover Shop All's captivating collection of soul-nurturing treasures for your blissful well-being"} title={"LOVING YOURSELF MULTIPLIES FROM HERE"}/>
  <br />
  
  <ThreeImagesStack images={imagesStack} />
  <br />
 
  <Aban url={'/images/badypos.jpg'} description={"Everything you need skin care routine"} title={"Skinn Essentials"}/>

  <br />
  <ThreeImagesStack images={imagesStack2} />
  
  <br />
 
  <StandardImageList />
  <br />
 
</div>
  </>
  );
};

export default HomePage;

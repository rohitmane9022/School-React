import  { useEffect, useState } from 'react';
import { fetchGalleryData } from '../AllData';
import Loading from '../Components/Loading';

const Gallery = () => {
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    fetchGalleryData().then(data => setGallery(data));
  }, []);

  if (!gallery) {
    return <Loading/>;
  }

  return (
    <div className="p-4 w-[90%] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((item, index) => (
          <div key={index} className="p-4 my-3">
            <img src={item.src} alt={item.alt} className="md:w-full md:h-[300px] rounded" />
            <p className="mt-2 md:text-lg font-semibold">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

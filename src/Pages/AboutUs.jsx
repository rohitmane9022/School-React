import { useEffect, useState } from 'react';
import { fetchAboutUsData } from '../AllData';
import Loading from '../Components/Loading';

const About = () => {
  const [aboutUs, setAboutUs] = useState(null);

  useEffect(() => {
    fetchAboutUsData().then(data => setAboutUs(data));
  }, []);

  if (!aboutUs) {
    return <Loading/>;
  }

  return (
    <div className="p-4 h-screen w-[90%] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className='text-lg'>{aboutUs.history}</p>
      <p className="mt-2 text-lg">Vision: {aboutUs.vision}</p>
      <p className="mt-2 text-lg">Mission: {aboutUs.mission}</p>
      <p className="mt-2 text-lg">Principal's Message: {aboutUs.principalMessage}</p>
      <p className="mt-2 text-lg">Infrastructure and Facilities:</p>
      <ul className="list-disc ml-4">
        {aboutUs.infrastructure.map((item, index) => (
          <li key={index} className='text-lg'>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;

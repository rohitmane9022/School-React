import { useEffect, useState } from 'react';
import { fetchAcademicsData } from '../AllData';
import Loading from '../Components/Loading';

const Academics = () => {
  const [academics, setAcademics] = useState(null);

  useEffect(() => {
    fetchAcademicsData().then(data => setAcademics(data));
  }, []);

  if (!academics) {
    return <Loading/>;
  }

  return (
    <div className="p-4 w-[90%] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Academics</h2>
      <h3 className="text-xl font-semibold">Curriculum:</h3>
      <ul className="list-disc ml-4 text-lg">
        <li>Primary (Grades 1-5): {academics.curriculum.primary.join(', ')}</li>
        <li>Secondary (Grades 6-10): {academics.curriculum.secondary.join(', ')}</li>
        <li>Senior Secondary:</li>
        <ul className="list-disc ml-8 text-lg">
          <li>Science Stream: {academics.curriculum.seniorSecondary.scienceStream.join(', ')}</li>
          <li>Commerce Stream: {academics.curriculum.seniorSecondary.commerceStream.join(', ')}</li>
        </ul>
      </ul>
      <h3 className="text-xl font-semibold mt-4">Teaching Methodologies:</h3>
      <p className='text-lg'>{academics.methodologies}</p>
      <h3 className="text-xl font-semibold mt-4">Educational Resources:</h3>
      <p className='text-lg'>{academics.resources}</p>
    </div>
  );
};

export default Academics;

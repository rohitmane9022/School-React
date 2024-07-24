import  { useEffect, useState } from 'react';
import { fetchFacultyData } from '../AllData';
import Loading from '../Components/Loading';

const Faculty = () => {
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    fetchFacultyData().then(data => setFaculty(data));
  }, []);

  if (!faculty) {
    return <Loading/>;
  }

  return (
    <div className="p-4 h-screen w-[90%] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Faculty</h2>
      <ul className='flex flex-wrap gap-10'>
        {faculty.map((member, index) => (
          <li key={index} className=" w-[300px] bg-white rounded-lg overflow-hidden">
            <img src={member.img} alt="" />
            <div className='my-3 ml-3'>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            
            <p className='text-lg'>Position: {member.position}</p>
            <p className='text-lg'>Qualification: {member.qualification}</p>
            <p className='text-lg'>Experience: {member.experience}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;

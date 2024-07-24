import { useEffect, useState } from 'react';
import { fetchStudentsData } from '../AllData';
import Loading from '../Components/Loading';

const Students = () => {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    fetchStudentsData().then(data => setStudents(data));
  }, []);

  if (!students) {
    return <Loading/>;
  }

  return (
    <div className="p-4 h-screen w-[90%] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Students</h2>
      <h3 className="text-xl font-semibold">Life at Springdale:</h3>
      <p className='text-lg'>{students.life}</p>
      <h3 className="text-xl font-semibold mt-4">Clubs and Societies:</h3>
      <p className='text-lg'>{students.clubs}</p>
      <h3 className="text-xl font-semibold mt-4">Achievements:</h3>
      <ul className="list-disc ml-4 text-lg">
        {students.achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="text-1xl font-semibold mt-4">Student Council:</h3>
      <ul className="list-disc ml-4 text-lg">
        {students.council.map((member, index) => (
          <li key={index}>{member.position}: {member.name}, Grade {member.grade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Students;

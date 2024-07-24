import  { useEffect, useState } from 'react';
import { fetchAdmissionsData } from '../AllData';
import Loading from '../Components/Loading';

const Admissions = () => {
  const [admissions, setAdmissions] = useState(null);

  useEffect(() => {
    fetchAdmissionsData().then(data => setAdmissions(data));
  }, []);

  if (!admissions) {
    return <Loading/>;
  }

  return (
    <div className="p-4 h-screen w-[90%] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Admissions</h2>
      <h3 className="text-xl font-semibold">Process:</h3>
      <p className='text-lg'>{admissions.process}</p>
      <h3 className="text-xl font-semibold mt-4">Criteria:</h3>
      <p className='text-lg'>{admissions.criteria}</p>
      <h3 className="text-xl font-semibold mt-4">Important Dates:</h3>
      <ul className="list-disc ml-4 text-lg">
        <li>Admission Form Availability: {admissions.dates.formAvailability}</li>
        <li>Last Date for Submission: {admissions.dates.lastDate}</li>
        <li>Entrance Test: {admissions.dates.testDate}</li>
        <li>Announcement of Results: {admissions.dates.resultsDate}</li>
      </ul>
    </div>
  );
};

export default Admissions;

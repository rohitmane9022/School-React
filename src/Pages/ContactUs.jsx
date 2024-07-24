
import { useEffect, useState } from 'react';
import { fetchContactUsData } from '../AllData';
import Loading from '../Components/Loading';
const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetchContactUsData().then(data => setContactInfo(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  if (!contactInfo) {
    return <Loading/>;
  }

  return (
    <div className="p-4 h-full w-[90%] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <div className='my-5'>
      <p className="text-lg">Address: {contactInfo.address}</p>
      <p className="text-lg">Phone: {contactInfo.phone}</p>
      <p className="text-lg">Email: {contactInfo.email}</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956828.1002712175!2d72.02043555625002!3d16.68039180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e337ba8bc763%3A0x84bb327275b2b4cb!2sSpringdale%20Preschool!5e0!3m2!1sen!2sin!4v1721848118936!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
        className="rounded-lg"
      ></iframe>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button type="submit" className="bg-primary-color hover:bg-blue-400 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;


//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941417.0866273616!2d72.35665539253827!3d18.12562866862461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956835cd253b%3A0x4340aea7f92e9c92!2sSinhgad%20Spring%20Dale%20Public%20School!5e0!3m2!1sen!2sin!4v1721847372318!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
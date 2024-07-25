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
    }, 1000);
  });
};

// src/services/dataService.js

export const fetchAboutUsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        history: 'Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.',
        vision: 'To create a learning environment that fosters academic excellence, critical thinking, and ethical values.',
        mission: 'To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.',
        principalMessage: 'At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.',
        infrastructure: [
          'State-of-the-art science and computer labs',
          'Spacious and well-equipped classrooms',
          'Library with a vast collection of books and digital resources',
          'Sports facilities including a playground, gymnasium, and swimming pool'
        ],
      });
    }, 1000);
  });
};

export const fetchAcademicsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        curriculum: {
          primary: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
          secondary: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education', 'Art'],
          seniorSecondary: {
            scienceStream: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'English'],
            commerceStream: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
          },
        },
        methodologies: 'We use a blend of traditional and modern teaching techniques to cater to different learning styles.',
        resources: 'Digital classrooms, interactive learning modules, and access to online educational platforms.',
      });
    }, 1000);
  });
};

export const fetchAdmissionsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        process: 'Admission forms are available for download soon. Submit the completed form along with required documents at the school office.',
        criteria: 'Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.',
        dates: {
          formAvailability: 'March 1st',
          lastDate: 'March 31st',
          testDate: 'April 15th',
          resultsDate: 'April 30th',
        },
      });
    }, 1000);
  });
};

export const fetchFacultyData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { img:"https://media.istockphoto.com/id/1675313665/photo/happy-elementary-teacher-in-front-of-her-students-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=On3uqpawn2vU8CBQaa0ZnkpMmmOUC7wiLMAkNz4ObdI=",name: 'John Doe', position: 'Principal', qualification: 'M.Ed', experience: '20 years' },
        { img:"https://media.istockphoto.com/id/1675313665/photo/happy-elementary-teacher-in-front-of-her-students-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=On3uqpawn2vU8CBQaa0ZnkpMmmOUC7wiLMAkNz4ObdI=",name: 'Jane Smith', position: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years' },
        { img:"https://media.istockphoto.com/id/1675313665/photo/happy-elementary-teacher-in-front-of-her-students-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=On3uqpawn2vU8CBQaa0ZnkpMmmOUC7wiLMAkNz4ObdI=",name: 'Emily Johnson', position: 'English Teacher', qualification: 'M.A. in English', experience: '10 years' },
        { img:"https://media.istockphoto.com/id/1675313665/photo/happy-elementary-teacher-in-front-of-her-students-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=On3uqpawn2vU8CBQaa0ZnkpMmmOUC7wiLMAkNz4ObdI=",name: 'Michael Brown', position: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years' },
        { img:"https://media.istockphoto.com/id/1675313665/photo/happy-elementary-teacher-in-front-of-her-students-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=On3uqpawn2vU8CBQaa0ZnkpMmmOUC7wiLMAkNz4ObdI=",name: 'Sophia Davis', position: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years' },
        { img:"https://media.istockphoto.com/id/1675313665/photo/happy-elementary-teacher-in-front-of-her-students-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=On3uqpawn2vU8CBQaa0ZnkpMmmOUC7wiLMAkNz4ObdI=",name: 'David Wilson', position: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years' },
      ]);
    }, 1000);
  });
};

export const fetchStudentsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        life: 'Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club',
        clubs: 'Literary Society, Environmental Club, Astronomy Club, Coding Club',
        achievements: [
          'John Smith - National Level Math Olympiad Winner',
          'Sarah Lee - Gold Medalist in State Swimming Championship',
          'Tech Innovators Club - Winners of Inter-School Robotics Competition',
        ],
        council: [
          { position: 'President', name: 'Amy Parker', grade: 12 },
          { position: 'Vice President', name: 'Rajiv Mehta', grade: 11 },
          { position: 'Secretary', name: 'Lisa Wong', grade: 10 },
        ],
      });
    }, 1000);
  });
};

export const fetchGalleryData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { src: annualDay , alt: 'Sports Day', caption: 'Students participating in various sports events.' },
        { src:science, alt: 'Science Exhibition', caption: 'Students presenting their science projects.' },
        { src: culture, alt: 'Cultural Fest', caption: 'Students performing in the cultural fest.' },
        { src: annualDay, alt: 'Classroom', caption: 'A glimpse of our interactive classrooms.' },
        { src: culture, alt: 'Library', caption: 'Students reading and studying in the school library.' },
      ]);
    }, 1000);
  });
};

export const fetchContactUsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        address: 'Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code',
        phone: '+1 (123) 456-7890',
        email: 'info@springdale.edu',
      });
    }, 1000);
  });
};

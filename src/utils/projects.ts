// import edenImage from '../assets/portfol-img-3.webp';
// import vueCart from '../assets/vue-cart-1.webp';
// import hackathonImage from '../assets/hackatjon-screenshot.webp';
import healHavenImg from '../assets/heal-haven.webp';
import tintsAndShades from '../assets/tints-and-shades.webp';
import gitImage from '../assets/portfol-img-1.webp';
import vividImg from '../assets/vivid-verse.webp';

export const projectData = [
  {
    title: 'Heal Haven',
    techLists: [
      'React',
      'React Router',
      'TypeScript',
      'Action Loaders',
      // Add other relevant technologies as needed
    ],
    intro:
      'Heal Haven is an application designed to connect users with therapists based on their cultural and religious beliefs. Developed using React, TypeScript, and React Router with action loaders for efficient data fetching and loading.',
    text: 'Heal Haven employs a matching algorithm to map users to therapists who share similar cultural and religious beliefs. The use of React and TypeScript ensures a robust and type-safe development process, while React Router facilitates seamless navigation within the app. Action loaders are utilized to optimize data fetching and loading for an enhanced user experience.',
    // Add relevant images for your app
    img: healHavenImg,
    link: 'https://github.com/Co-Lab-You-Belong-in-Tech/mha',
    live: 'https://mha.vercel.app/',
    reverse: true,
    id: 3, // Choose a unique identifier for your app
    path: 'heal-haven',
    features: [
      'User-Therapist Matching Based on Cultural and Religious Beliefs',
      'Efficient Data Fetching with Action Loaders',
      'React Router for Seamless Navigation',
      'Type-safe Development with TypeScript',
      // Add other features as needed
    ],
  },
  {
    title: 'Vivid Verse',
    techLists: [
      'Next.js',
      'Firebase',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Cypress',
    ],
    intro:
      'The Next.js Blog App with Firebase is a powerful web application that enables users to create, read, update, and delete blog posts. Built with Next.js, Firebase, React, Tailwind CSS, TypeScript, and Cypress, it provides seamless functionality for managing blog content and user interactions, while ensuring code quality and robust testing.',
    text: 'With Firebase as the database, the app allows users to perform CRUD operations on blog posts, including liking, commenting, and updating profile images. TypeScript enhances the development process by adding static typing, while Cypress ensures comprehensive end-to-end testing.',
    img: vividImg,
    link: 'https://github.com/talentlessDeveloper/vivid-verse',
    live: 'https://vivid-verse.vercel.app/',
    reverse: false,
    id: 2,
    path: 'vivid-verse',
    features: [
      'Blog Post CRUD Operations',
      'User Authentication and Authorization',
      'Real-time Database Updates',
      'Like and Comment Functionality',
      'Profile Image Update',
      'Responsive Design',
      'End-to-End Testing with Cypress',
      'Type-safe Development with TypeScript',
    ],
  },
  {
    title: 'Github Repositories',
    techLists: ['React', 'Framer-motion', 'Tailwindcss', 'React-Query'],
    intro:
      'During the development of my project using Framer Motion, React, React Query, and Tailwind CSS, I incorporated a variety of powerful features to showcase my GitHub repositories and provide a seamless user experience. ',
    text: 'By integrating Framer Motion for smooth animations and transitions, and utilizing Tailwind CSS for efficient styling, I created a visually appealing and user-friendly experience.',
    img: gitImage,
    link: 'https://github.com/talentlessDeveloper/github-repositories',
    live: 'http://github-repositories-ten.vercel.app/',
    reverse: true,
    id: 1,
    path: 'github-repo',
    features: [
      ' GitHub Repository List',
      'Dynamic Loading and Caching',
      'Interactive Transitions',
      ' Responsive Design',
      '  Pagination',
    ],
  },
  {
    title: 'Tints And Shades',
    techLists: ['JavaScript', 'Tailwind', 'React'],
    intro:
      "During my project development using React, Tailwind CSS, and TypeScript, I had the opportunity to leverage the powerful tinycolors library. This library proved to be incredibly valuable in generating tints and shades of various colors, as well as providing color names for hex, RGB, and HSL codes. Here's a comprehensive overview of the process and the resulting color formats:",
    text: 'To achieve the desired tints and shades, I utilized tinycolors library to manipulate and generate color variations. With this approach, I was able to produce a diverse range of color schemes that can be easily implemented in different formats. e.g',
    img: tintsAndShades,
    link: 'https://github.com/talentlessDeveloper/tints-and-shades',
    live: 'https://talentlessdeveloper.github.io/tints-and-shades/',
    reverse: false,
    id: 4,
    path: 'tints',
    features: [
      ' Copying Color Codes',
      '  Color Name Identification',
      'Shade Generation',
      ' Color Format Conversion',
    ],
  },

  // {
  //   title: 'OurEden Clone',
  //   techLists: ['React', 'Scss', 'React-Query'],
  //   intro:
  //     'This project is a website clone of Eden Life, a home services company in Nigeria. The website is built using React, SCSS, and React-Query.',
  //   text: 'It mimics the live website including all pages, and  its optimized for mobile devices. Got to get hands dirty on building a responsive website with react for the first time',
  //   img: edenImage,
  //   link: 'https://github.com/talentlessDeveloper/ouredenclone',
  //   live: 'https://talentlessdeveloper.github.io/ouredenclone/',
  //   reverse: false,
  //   id: 2,
  //   path: 'eden-clone',
  //   features: [
  //     ' Responsive design',
  //     'Routing For All Pages',
  //     'Client-side booking system',
  //     'Error handling (Error Boundary)',
  //     'Lazy Loading',
  //   ],
  // },
  // {
  //   title: 'Vue Cart',
  //   techLists: ['Firebase', 'JavaScript', 'CSS', 'Vue', 'Pinia'],
  //   intro:
  //     "This  app incorporates Firebase Authentication, ensuring secure access for users. Through this integration, user validation is seamlessly performed, bolstering the app's overall security and reliability.. ",
  //   text: "Furthermore, Vue's router beforeEach function is leveraged to protect routes within the application. This enhances the user experience by controlling access to specific sections or functionalities, granting authorized individuals exclusive access to relevant content.In addition, the app's state management is efficiently handled by Pinia store. This state management solution facilitates seamless data flow and ensures smooth synchronization across various components and features within the application.",
  //   img: vueCart,
  //   link: 'https://github.com/talentlessDeveloper/vue-cart',
  //   live: 'https://vue-cart-five.vercel.app/',
  //   reverse: true,
  //   id: 5,
  //   path: 'vue-cart',
  //   features: [
  //     ' Route Protection',
  //     '  State Management',
  //     'Dynamic Product List',
  //     '  Authentication',
  //   ],
  // },
  // {
  //   title: 'Hackathon Challenge',
  //   techLists: ['JavaScript', 'CSS'],
  //   intro:
  //     'As part of an impressive Altschool Hackathon project, I had the opportunity to showcase my skills in developing a diverse set of features that cater to different needs. The project aimed to create a comprehensive and versatile platform, a student dashboard for data analysis, a carrier identification tool called Phonie, and a content-sharing enhancement tool called Redactr.',
  //   text: 'By participating in this Altschool Hackathon project, I demonstrated my proficiency in developing versatile features to address a wide range of user needs and deliver innovative solutions. ',
  //   img: hackathonImage,
  //   link: 'https://github.com/chimoski/Altschool-circle-153-hackathon',
  //   live: 'https://altschool-circle-153-hackathon.vercel.app/',
  //   reverse: true,
  //   id: 3,
  //   path: 'hackathon',
  //   features: [
  //     ' Identifies users telecommunication carriers based on their phone numbers',
  //     'Dashboard providing  valuable insights into student data, genders, track, population , and other relevant metrics.',
  //     'A privacy-focused content-sharing tool designed to scramble words or phrases in social media posts, enhancing safety and safeguarding sensitive information during online sharing.',
  //   ],
  // },
];

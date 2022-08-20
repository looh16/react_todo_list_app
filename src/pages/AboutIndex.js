import React from 'react';
import { Link } from 'react-router-dom';

const AboutIndex = () => {
  const aboutData = {
    'about-app': {
      title: 'About the App',
      description:
              'In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.',
    },
    'about-author': {
      title: 'About the Author',
      description:
          'This app was developed by Custodio Serafim, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with Custodio on Twitter https://twitter.com/custodiolanga1.',
    },
  };

  return (
    <ul>
      {Object.entries(aboutData).map(([slug]) => (
        <li key={slug}>
          <Link to={`/about/${slug}`}>
            <h2>{slug}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default AboutIndex;

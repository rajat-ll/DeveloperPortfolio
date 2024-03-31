import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AccessElite',
        description: "Developed using React-Redux and Flask, integrated with the Google Workspace API to create an SPA that enables administrators to dynamically manage user access, achieving 99.99% uptime and sub-200ms modification response times,Enhanced PostgreSQL with Python for 250% faster indexing and transaction speeds, integrated Python with AWS Lambda for Amazon SES notifications, automating 95% of email workflows for user access notifications",
        tools: ['Flask', 'React', 'Python', 'PostgresSQL', 'AWS SES', 'Bootstrap', 'boto3', 'Google Workflow'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Git Jira Analysis',
        description: 'Developed in Flask & React, integrated MongoDB & D3.js for data visualization, serving 200+ LiquiLoans members for GitHub & Jira analytics; ensured 98% code coverage with PyTest, enhanced with CI/CD integration for seamless updates & deployment efficiency',
        tools: ['FLask', 'Tailwind CSS', "React", "MongoDB", "TypeScript", "MySQL", "boto3", "Python", "Git"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Chatify',
        description: 'Implemented an advanced real-time communication framework using Node.js and Express.js, seamlessly integrating Socket.IO to enable instant bi-directional messaging and dynamic updates, significantly enhancing user interaction speed and system responsiveness.Optimized application performance through the strategic implementation of an LRU (Least Recently Used) caching algorithm.',
        tools: ['React', 'Node.js', 'Express.js', 'Socket.io', 'Express', 'JavaScript', 'MongoDB', 'PHP', 'Apache', 'Git', 'Tailwind CSS', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'LifeBlood',
        description: "Crafted a blood donation web platform, facilitating donor-recipient matching with an efficient front-end design using Bootstrap and implemented secure user authentication and designed a dynamic interface with JQuery Ajax for real-time data interaction without page reloads",
        tools: ['Bootstrap', 'React.js', 'JQuery', 'AJAX', "PHP", "MySql"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
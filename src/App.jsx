import React, { useState } from 'react';
import './App.css';
import meImage from '/me.png'; // make sure your me.png is in the public/ folder

// Q&A data
const qnaData = [
  {
    question: "1. Please tell us about the career path you want to choose/ field of interests",
    answer: "I’m passionate about software development and love building SaaS products that make a real impact. My goal is to create scalable, user-friendly solutions that help businesses run more efficiently while delivering a great user experience. I enjoy working with modern technologies and constantly learning to build better, more innovative applications."
  },
  {
    question: "2. What interests you in the role you applied to? Please let us know whether you are interested to be an intern as backend developer in python or front end developer in ReactJS",
    answer: "I am highly interested in the Frontend Developer (React.js) role. I enjoy building intuitive, user-friendly interfaces and creating seamless user experiences. With experience in React.js, Vue.js, and Angular, I have worked on developing scalable and interactive web applications. I am passionate about frontend development and excited about the opportunity to contribute my skills while continuing to grow in this field."
  },
  {
    question: "3. Are you ready to switch to cross-platform tasks (for ex. From ML to non-ML projects in Python or from React to non-React or change in platform all together) or change in technologies as you go/as demanded by the work?",
    answer: "Yes, I am open to switching to cross-platform tasks or exploring new technologies as required. However, I would need some time to understand and adapt to new technologies. Once I grasp the basics, I am fully ready to take on new challenges. I am always eager to research, learn, and grow, making sure I can contribute effectively to any project."
  },
  {
    question: "4. What work sample can you provide that most clearly demonstrates your qualification/skillset as mentioned in your CV/resume?",
    answer: "One of my best work samples is EmbedChat.app, a fully operational SaaS product that I helped design and develop. I created the entire structure and wrote the Vue.js code for the frontend, ensuring a seamless and user-friendly experience. The platform is fully functional and showcases my skills in frontend development, UI/UX design, and SaaS architecture."
  },
  {
    question: "5. Tell us about a time you had to put in extra work to meet a deadline at college/project/internship and how it went through.",
    answer: "I am highly committed to completing tasks, regardless of time constraints. One example is my college final project, Research Assist AI, where I took full responsibility for designing the frontend using Vue.js. As the deadline approached, I put in extra hours to refine the UI/UX, ensuring a smooth and responsive experience. Despite the time pressure, I successfully delivered a well-structured and functional frontend, demonstrating my dedication to meeting deadlines and producing high-quality work."
  },
  {
    question: "6. When you’re working in student project, it’s tricky for each and every one to excellently deliver. How do you go about prioritising to meet the projects’ needs and it's success?",
    answer: "I prioritize clear task delegation, effective communication, and focusing on high-impact features first. I ensure that everyone plays to their strengths while maintaining flexibility to fill gaps where needed. Regular check-ins and proactive problem-solving help keep the project on track and ensure its success."
  },
  {
    question: "7. Tell me about a goal set for yourself. Did you meet your objective and how?",
    answer: "One of my key goals was to launch our first product, EmbedChat.app, in the first week of November. However, we faced quality issues, so we decided to postpone the launch to January 1 to ensure a polished and reliable product. It took five months to complete while balancing studies, but by prioritizing quality and continuous improvements, we successfully built a fully operational SaaS platform."
  },
  {
    question: "8. Do you expect stipend to be paid by company and how much? If yes, are you committed to completing tasks at the same time with responsibility?",
    answer: "Yes, I expect a stipend as an intern—after all, money is a great motivator! Jokes aside, I take full responsibility for completing tasks on time and ensuring that my work adds real value to the team. A stipend not only supports my commitment but also keeps the motivation levels high!"
  },
  {
    question: "9. Are you interviewing with other companies for internship or do you have confirmed internship elsewhere?",
    answer: "Yes, I am currently doing an unpaid internship through my college."
  },
  {
    question: "10. Are you comfortable to work from office as per company’s schedule?",
    answer: "Yes, I am comfortable working from the office as per the company's schedule."
  },
  {
    question: "11. When can you start if you're chosen to?",
    answer: "18/2/25"
  },
  {
    question: "12. Any question in your mind about the role/team/company?",
    answer: "If I perform well during the internship, is there an opportunity for a full-time job offer? Also, on a lighter note—does the company provide any free food? (Good code runs on good fuel!)"
  }
];

// Accordion item component
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          &#x25BC;
        </span>
      </button>
      <div className={`accordion-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={meImage} alt="Profile" className="profile-image" />
        <h1 className="name">Vignesh Prabhu</h1>
        <h2 className="title">A Motivated Frontend Developer</h2>
      </header>

      <main className="content">
        {qnaData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </main>

      <footer className="footer">
        <p>
          Developed by{' '}
          <a
            href="https://www.linkedin.com/in/vigneshprabhu11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vignesh
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

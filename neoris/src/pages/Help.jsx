import React from 'react';
import { Header } from "../components";

const HelpPage = () => {
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto', fontFamily: 'Arial, sans-serif', fontSize: '16px', padding: '20px' }}>
      <Header title="Help" subtitle="HR Support and Resources" />
      <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px', marginBottom: '20px', marginTop: '20px'  }}>
        <h2 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold"}}>Welcome to HR Support</h2>
        <p>
          Our HR Support Center is here to assist you with any questions or concerns related to your employment and professional development.
        </p>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold" }}>Frequently Asked Questions</h3>
        <p>
          <strong style={{ color: '#009D4E' }}>How do I enroll in a course?</strong><br />
          To enroll in a course, simply navigate to the Courses section of the platform and select the course you're interested in. Then, click on the enroll button to get started.
        </p>
        <p>
          <strong style={{ color: '#009D4E' }}>What should I do if I encounter technical issues?</strong><br />
          If you encounter any technical issues while using the platform, please reach out to our IT support team at it-support@example.com for assistance.
        </p>
        <p>
          <strong style={{ color: '#009D4E' }}>How can I provide feedback on a course?</strong><br />
          We value your feedback! You can provide feedback on a course by completing the course evaluation form provided at the end of each course.
        </p>
      </div>
      <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
        <h3 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold"}}>Contact HR</h3>
        <p>
          If you have any questions or need further assistance, please don't hesitate to contact our HR department at <strong style={{ color: '#009D4E' }}>hr@neoris.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default HelpPage;

import React from 'react';
import back from '../assets/back.jpg';
import back1 from '../assets/back1.jpg';
import back2 from '../assets/back2.jpg';

const Blog = () => {
  return (
    <div className="blog-post">
      <h1>The Future of DIU Code Education: Our Roadmap</h1>
      <p className="blog-intro">
        Welcome to the official blog for DIU Code Education! Since our launch, our mission has been to provide accessible, high-quality coding education for everyone. We've been thrilled by the community's response and are working hard to make this platform even better. Today, we want to share our roadmap and give you a sneak peek into the exciting features and improvements coming your way.
      </p>

      <div className="blog-section-two-col">
        <div className="blog-text-content">
          <h2>1. Interactive Learning & Progress Tracking</h2>
          <p>
            We believe the best way to learn is by doing. That's why we're building a robust user account system. Soon, you'll be able to create a profile, track your progress through courses and tutorials, and pick up right where you left off. Alongside this, we'll be introducing interactive quizzes and coding challenges at the end of each module to help solidify your knowledge.
          </p>
        </div>
        <div className="blog-image-content">
          <img src={back} alt="Team working on code" className="blog-image" />
        </div>
      </div>

      <div className="blog-section-two-col reverse">
        <div className="blog-text-content">
          <h2>2. Expanded Content: New Tutorials & Advanced Topics</h2>
          <p>
            Our current library of tutorials is just the beginning. We are actively developing new content to cover a wider range of technologies. Here are some of the topics on our list:
          </p>
          <ul>
            <li><strong>Advanced JavaScript:</strong> Frameworks like Angular and Vue.js.</li>
            <li><strong>Mobile Development:</strong> Cross-platform development with React Native and Flutter.</li>
            <li><strong>Data Science:</strong> Deeper dives into Python libraries like NumPy, Pandas, and Scikit-learn.</li>
            <li><strong>DevOps & Cloud Computing:</strong> Introduction to Docker, CI/CD pipelines, and cloud platforms like AWS.</li>
          </ul>
        </div>
        <div className="blog-image-content">
          <img src={back1} alt="Student learning online" className="blog-image" />
        </div>
      </div>

      <h2>3. Building a Community</h2>
      <p>
        Learning together is more effective and fun. We are planning to launch a community forum where students can ask questions, share their projects, and collaborate with peers. This will be a space to get help from both fellow learners and our instructors.
      </p>

      <img src={back2} alt="Community collaboration" className="blog-image" />

      <h2>4. Project-Based Courses & Certifications</h2>
      <p>
        To help you build a job-ready portfolio, we will be introducing project-based courses. These courses will guide you through building real-world applications from scratch. Upon successful completion of a learning path, you'll be awarded a certificate that you can share on your resume and professional profiles.
      </p>
      
      <p className="conclusion">
        We are incredibly excited about the future of DIU Code Education and are committed to creating the best possible learning experience for our community. Your feedback is invaluable, so please feel free to reach out with any suggestions. Happy coding!
      </p>
    </div>
  );
};

export default Blog;
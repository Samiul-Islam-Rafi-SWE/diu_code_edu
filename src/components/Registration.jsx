import React, { useState, useEffect } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRegistration = () => {
    let valid = true;
    let errorMessage = "";
    if (name.trim() === "") { errorMessage += "Enter Name.\n"; valid = false; }
    if (email.indexOf("@") === -1) { errorMessage += "Invalid Email.\n"; valid = false; }
    if (password.length < 6) { errorMessage += "Password min 6 chars.\n"; valid = false; }
    if (valid) { alert("Success! Welcome, " + name + "."); } 
    else { alert(errorMessage); }
  };

  return (
    <section id="registration">
      <div className="reminder">
        <p>Join 10,000+ Students Learning for Free</p>
        <h1>Create Your Free Account</h1>
        
        <div className="time">
          <span>{timeLeft.days} <br /> Days</span>
          <span>{timeLeft.hours} <br /> Hours</span>
          <span>{timeLeft.minutes} <br /> Mins</span>
          <span>{timeLeft.seconds} <br /> Secs</span>
        </div>
      </div>

      <div className="form">
        <h3>Student Registration</h3>
        <input type="text" placeholder="Full Name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Student ID (Optional)" name="student_id" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        <input type="email" placeholder="Email Address" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Create Password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button className="yellow" onClick={handleRegistration}>Get Free Access</button>
      </div>
    </section>
  );
};

export default Registration;
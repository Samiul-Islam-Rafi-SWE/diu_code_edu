import React from 'react';

const Home = () => {
  return (
    <>
      <section id="home">
        <h1 className="w3-title">Learn to Code</h1>
        <h3 className="w3-sub">Free for any student, anywhere.</h3>

        <div className="search-box">
          <input type="text" placeholder="Search HTML, CSS, JS, PHP..." />
          <button className="yellow" onClick={() => window.location.href='#tutorial'}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="btn">
          <a className="blue" href="#tutorial">Start Learning Now</a>
        </div>
        
        <br /><br />
        <p style={{color: '#fff', fontSize: '14px', fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>HTML &nbsp;|&nbsp; CSS &nbsp;|&nbsp; JAVASCRIPT &nbsp;|&nbsp; PHP</p>
      </section>

      <section id="features">
        <h1>Awesome Features</h1>
        <p>Replenish man have thing gathering lights yielding shall you</p>
        <div className="fea-base">
          <div className="fea-box">
            <i className="fas fa-graduation-cap"></i>
            <h3>Scholarship Facility</h3>
            <p>One make Creepth, man bearing thira firmament won't great heaven</p>
          </div>

          <div className="fea-box">
            <i className="fas fa-file-certificate"></i>
            <h3>Dell Online Course</h3>
            <p>One make Creepth, man bearing thira firmament won't great heaven</p>
          </div>

          <div className="fea-box">
            <i className="fas fa-award"></i>
            <h3>Global Certification</h3>
            <p>One make Creepth, man bearing thira firmament won't great heaven</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

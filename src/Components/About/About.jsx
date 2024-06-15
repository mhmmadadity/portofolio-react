// About.jsx
import React from 'react';
import profile_img from '../../assets/himmel2.jpg';
import theme from '../../assets/theme_pattern.svg';
import './About.css';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="Theme Pattern" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="Profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, Saya Adalah Seorang Mahasiswa Teknik Informatika Dari Institut Teknologi Padang, Saya Sekarang Dalam Masa Pembelajaran Menuju Fullstack Developer, Saya Berasal Dari Pekanbaru-Riau Sebelumnya Saya Bersekolah Di SMK Muhamadiyah 2 Pekanbaru</p>
                    <p>Pengalaman Saya Selama Masa Pendidikan Saya Adalah Magang Menjadi Network Enginer Selama 1 Tahun Di PT.Global Data Solusi (GDS Network Pekanbaru)</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"55%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"45%"}} /></div>
                    <div className="about-skill"><p>Networking</p><hr style={{width:"75%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Project Clear</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  );
}

export default About;

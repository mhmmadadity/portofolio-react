import React from 'react';
import arrow_icon from '../../assets/arrow_icon.svg';
import services_data from '../../assets/services_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Service.css';

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <div className="services-container">
            {services_data.map((service, index) => {
                const { s_no, s_name, s_desc } = service;
                return (
                    <div key={index} className="services-format">
                        <h3>{s_no}</h3>
                        <h2>{s_name}</h2>
                        <p>{s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="Arrow Icon" />
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Services;

import React from 'react';
import './DisplayCountry.css';




const DisplayCountry = (props) => {
    const { name, region, flags, area, capital, currencies, independent, languages, maps, population, status, timezones, startOfWeek } = props.allCountry

    return (
        <div id={name.common === 'Nepal' ? "special-country" : " "}>
            <div className="display_box">
                <div className="content">
                    <div className="flags">
                        <img src={flags.png} alt="" />
                    </div>
                    <div className="text_area">
                        <h3><span className='text-info1'>Name:</span> {name.common}</h3>
                        <h4><span className='text-info2'>Capital:</span> {capital}</h4>
                        <p><span className='text-info-other'>Region:</span> {region}</p>
                        <p><span className='text-info-other'>Start Of Week:</span> {startOfWeek}</p>
                        <p><span className='text-info-other'>area:</span> {area}</p>
                        <p><span className='text-info-other'>Population:</span> {population}</p>
                        <p><span className='text-info-other'>Independent:</span> {independent ? 'Yes' : 'No'}</p>
                    </div>
                </div>
                <a id='map_btn' href={maps.googleMaps} target='blank'><i class="fa-solid fa-map-location-dot"></i> Map</a>
            </div>
        </div>
    );
};

export default DisplayCountry;
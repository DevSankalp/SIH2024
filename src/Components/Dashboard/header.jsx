import React, { useState } from 'react';
import govtgujlogo from '../Assets/govtguj.png';

const Header = ({userData}) => {
  // State to track the hover
  const [isHovered, setIsHovered] = useState(false);


  const profileDetails = userData
    ? {
        name: userData.attributes.name,
        batch: userData.attributes.year,
        location: userData.attributes.location,
        major: userData.attributes.department,
      }
    : {
        name: "John Doe",
        batch: "2021",
        location: "Location",
        major: "Major",
      };

  return (
    <div className="flex items-center justify-between pt-4 pl-10 pr-10">
      {/* Left side: Government logo and text */}
      <div className="flex gap-4 items-center">
        <img src={govtgujlogo} alt="Government Logo" className="w-12" />
        <h2 className="text-lg font-bold">
          GOVERNMENT <br /> OF GUJARAT
        </h2>
      </div>

      
      <div 
        className="relative flex gap-4 items-center"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h3 className="text-lg font-semibold">{userData ? userData.attributes.name : "John Doe"}</h3>
        </div>
        <img 
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid" 
          alt="Profile" 
          className="w-12 h-12 rounded-full cursor-pointer"
        />

        {/* Dropdown */}
        {isHovered && (
          <div className="absolute z-10  top-12 right-0 bg-[rgb(154,91,248)] text-white shadow-2xl rounded-lg p-4 w-64">
            <p><strong>Name:</strong> {profileDetails.name}</p>
            <p><strong>Batch:</strong> {profileDetails.batch}</p>
            <p><strong>Location:</strong> {profileDetails.location}</p>
            <p><strong>Major:</strong> {profileDetails.major}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

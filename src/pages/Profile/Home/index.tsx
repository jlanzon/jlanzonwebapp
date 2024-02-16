import React from 'react';
import { FaUsers, FaUserCheck, FaUserPlus, FaDollarSign } from 'react-icons/fa';

const isLoading = false;

const ProfileHome: React.FC = () => {
  const fakeStats = [
    { label: 'Total Users', value: 1200, icon: <FaUsers /> },
    { label: 'Active Users', value: 890, icon: <FaUserCheck /> },
    { label: 'New Signups', value: 150, icon: <FaUserPlus /> },
    { label: 'Monthly Revenue', value: '$12,500', icon: <FaDollarSign /> },
  ];

  return (
    <>
      {isLoading ? (
        <span className="loading loading-infinity loading-lg m-auto"></span>
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl mb-8">Statistics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fakeStats.map((stat, index) => (
              <div key={index} className="card mx-auto w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-xl">
                    {stat.icon}
                    {stat.label}
                  </h2>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileHome;

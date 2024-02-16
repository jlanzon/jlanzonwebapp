import React from 'react';
import { FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

// const profileInfo = [
//     { id: 1, ProfileName: 'Joseph Lanzon', email: 'joelanzon@outlook.com' }
// ]

const isLoading = false

const Profile: React.FC = () => {
    return (
        <>
            {isLoading ?
                <span className="loading loading-infinity loading-lg m-auto"></span>
                :
                <div className='mt-10'>
                    <div>
                        <p className='mx-auto text-center text-2xl mt-2 mb-2'>My Profile</p>
                        <div className='flex w-80 mx-auto lg:w-1/2 justify-center'>
                            <div className="avatar mx-2">
                                <div className="w-24 rounded-full">
                                    <img src="https://static.vecteezy.com/system/resources/previews/024/183/513/original/male-avatar-portrait-of-a-young-brunette-male-illustration-of-male-character-in-modern-color-style-vector.jpg" />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='mt-auto'> Welcome, Joseph Lanzon</p>
                                <p className='mb-auto'>@JLanzon</p>
                                <div>
                                    <div className="badge badge-primary badge-solid mx-2 shadow-sm">PREMIUM</div>
                                    <div className="badge badge-secondary badge-solid mx-2">Addon 1</div>
                                    <div className="badge badge-accent badge-solid mx-2">Addon 2</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col mx-5 mt-5">
                        <a href='/settings'>
                            <button className="flex items-center space-x-2 mt-2">
                                <FaCog />
                                <p>Settings</p>
                            </button>
                        </a>
                        <button className="flex items-center space-x-2 mt-2">
                            <FaQuestionCircle />
                            <p>Help</p>
                        </button>
                        <button className="flex items-center space-x-2 mt-2">
                            <FaSignOutAlt />
                            <p>Log Out</p>
                        </button>
                    </div>
                </div>
            }
        </>

    );
};

export default Profile;

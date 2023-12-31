import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { topics } from '../assets/constants';

const Discover = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const topic = query.get('topic'); 

  const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]';
  const topicStyle = 'xl:border-2 hover.bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black';

  return (
    <div>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
        Popular Topics
      </p>
      <div className='xl:border-b-2 xl.border-gray-200 pb-6'>
        <div className='flex gap-3 flex-wrap'>
          {topics?.map((item) => (
            <Link to={`/?topic=${item.name}`} key={item.name}>
              <div className={topic === item.name ? activeTopicStyle : topicStyle}>
                <span className='font-bold text-2xl xl:text-md'>
                  {item.icon}
                </span>
                <span className={`font-medium text-md hidden xl:block capitalize`}>
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;

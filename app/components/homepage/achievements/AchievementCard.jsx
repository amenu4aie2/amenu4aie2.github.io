// @flow strict
import React from 'react';
import Image from 'next/image';

function AchievementCard({ achievement }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      {achievement.image ? (
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
          <Image
            src={achievement.image}
            // DONT STREACH THE IMAGE JUST FIT IT
            width={500}
            height={500}


            alt=""
            className='h-full w-full group-hover:scale-110 transition-all duration-300'
          />
        </div>
      ): null}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
        <p className="text-sm text-[#16f2b3]">{achievement.date}</p>
        <p className="text-sm lg:text-base text-[#d3d8e8] mt-2">{achievement.description}</p>
      </div>
    </div>
  );
}

export default AchievementCard;

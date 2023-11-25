import { useState, useEffect, useRef } from 'react';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults'

function Home() {


    return (
      <div className='flex flex-col gap-10 videos h-full'>
            <VideoCard/>

      </div>
    );
}
export default Home

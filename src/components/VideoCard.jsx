import { useState, useEffect, useRef } from 'react';
import SanityClient from '../hooks/client';
import { allPostsQuery } from '../hooks/queries';
import {Link} from 'react-router-dom';
import {GoVerified} from 'react-icons/go';
import {BsPlay, BsFillPauseFill, BsFillPlayFill} from 'react-icons/bs';
import {HiVolumeOff, HiVolumeUp} from 'react-icons/hi'

function VideoCard() {
    const [videos, setVideos] = useState([])
    const [isHover, setIsHover] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
      if(playing) {
        videoRef.current?.pause();
        setPlaying(false);
      } else {
        videoRef.current?.play();
        setPlaying(true);
      }
    }
    useEffect (() => {
      const fetchData = () => {
       const query = allPostsQuery();
       const getData = SanityClient.fetch(query)
       
       getData.then((data) => setVideos(data))
           .catch((error) => console.error('Error Fetching Post', error));
      }
      fetchData()      
   }, []);
    console.log(videos)

    return (
      videos.map((video) => (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6' key={video.userId}>
      <div>

        <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
          <div className='md:w-16 md:h-16 w-10 h-10'>
            <Link to='/'>
              <img width={62} height={62}
              className='rounded'
              src={video.postedBy?.image} alt="Profile Photo" />
            </Link>
          </div>
          <div>
            <Link to='/'>
            <div className='flex items-center gap-2'>
                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>{video.userId}
                <GoVerified className='text-blue-400 text-md'/>
                </p>
                <p className='capitalize font-medium text-xs text-gray-500 hidden:md-block'>
                {video.userId}
                </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='lg:ml-20 flex gap-4 relative'>
        <div 
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        className='rounded-3xl'>
          <Link to="/">
            <video 
            loop
            autoPlay
            muted
            ref={videoRef}
            className='lg:w[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
            src={video.video?.asset.url}>
            </video>
          </Link>
          {isHover && (
            <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3 '>
              {playing ? (
              <button onClick={onVideoPress}>
                <BsFillPauseFill className='text-black text-2xl lg:text-4xl'/>
              </button>  
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className='text-black text-2xl lg:text-4xl'/>
                </button>
              )}
               {isVideoMuted ? (
              <button onClick={()=> setIsVideoMuted(false)}>
                <HiVolumeOff className='text-black text-2xl lg:text-4xl'/>
              </button>  
              ) : (
                <button onClick={()=> setIsVideoMuted(true)}>
                  <HiVolumeUp className='text-black text-2xl lg:text-4xl'/>
                </button>
              )}
            </div>
          )} 
        </div>
      
      </div>
        
    </div>
      ))
  )
}
export default VideoCard

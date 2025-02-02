import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import VideosCard from '../components/VideosCard';
import { useYoutubeApi } from '../context/YoutubeApliContext';

export default function Videos() {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data:videos}=useQuery({
        queryKey:["videos", keyword],
        queryFn: async()=> youtube.search(keyword)
    });
    return (
        <>
            <div>Videos {keyword? `🔎 ${keyword}` : '🔥'}</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
            {videos && videos.map(video => <VideosCard key={video.id} video={video} />)} 
            </ul>
        </>
    );
}


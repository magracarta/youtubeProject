import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApliContext';
import VideosCard from './VideosCard';

export default function ChannelVideos({id}) {
    const {youtube} = useYoutubeApi();
    let {isLoading, error, data:videos} = useQuery({
        queryKey:["related",id],
        queryFn:()=>youtube.relatedVideos(id),
        staleTime:1000*60*5
    });
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            <ul>
            {videos && videos.map((video, idx) => idx !==0? <VideosCard key={video.id} video={video} type='list' />:"")} 
            </ul>
        </div>
    );
}


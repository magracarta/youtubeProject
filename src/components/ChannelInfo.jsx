import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApliContext';

export default function ChannelInfo({id, name}) {
    const {youtube}  = useYoutubeApi();
    let {isLoading, error, data:url}= useQuery({
        queryKey:['channel',id],
        queryFn:()=>youtube.channelImgageURL(id),
        staleTime:1000*60*5
    });


    return (
        <div className='flex my-4 mb-8 items-center'>
            {url && <img className='w-10 h-10 rounded-full' src={url.thumbnails.default.url} alt={name}/>}
           <p className='text-lg font-medium ml-2'>{name}</p>
        </div>
    );
}


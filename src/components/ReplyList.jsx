import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApliContext';
import { formatAgo } from '../util/date';

export default function ReplyList({id}) {
    const {youtube} = useYoutubeApi();
    let {isLoading, error, data:replys}= useQuery({
        queryKey:["reply", id],
        queryFn:()=> youtube.replylistFn(id)
    });
    console.log(replys);
    return (
        <ul className='mt-8 mx-6'>
            {replys&&replys.map(reply=> <li className='mt-9 flex'>
                <div className='mt-1 flex-none mr-4'>
                    <img className='rounded-full mr-6 w-full' src={reply.imgurl}/>
                </div>
                <div className='ml-1 font-light flex-1'>
                    <span className='text-lg font-bold'>{reply.name}</span>
                    <p className='text-xl mr-10'>{reply.textcoment}</p>
                    <p className='text-sm mt-3'>{formatAgo(reply.publishedAt,"ko")}</p>
                </div>
                </li>)}
        </ul>
    );
}


import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import ChannelInfo from '../components/ChannelInfo';
import ChannelVideos from '../components/ChannelVideos';
import ReplyList from '../components/ReplyList';

export default function VideoDetail() {
    const {state:{video}} = useLocation();
    const {videoId} = useParams();
    const {title, channelId ,channelTitle,description} = video.snippet;
    const [iframeSrc, setIframeSrc] = useState("");
    useEffect(() => {
        if (video) {
            setIframeSrc(`https://www.youtube.com/embed/${videoId}?enablejsapi=1`);
        }
    }, [videoId, video]);
    
    return (
        <section className='flex flex-col lg:flex-row'>
            <article className='basis-4/6'>
                {iframeSrc&&<iframe id="player" type="text/html" width="100%" height="640"
                key={videoId}
                src={iframeSrc}
                frameBorder="0"
                title={title}
                ></iframe>}
                <div className='p-8'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    {channelId}
                    <ChannelInfo id = {channelId} name = {channelTitle} />
                    <pre className='whitespace-pre-wrap'>{description}</pre>
                </div>
                <div className=''>
                    <ReplyList id={videoId}/>
                </div>
            </article>
            <section className='basis-2/6'>
                <ChannelVideos id={channelId} />
            </section>
        </section>
    );
}


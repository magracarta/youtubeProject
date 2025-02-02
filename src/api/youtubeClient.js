
import axios from 'axios';

export default class YoutubeClient{
    constructor(){
        this.http = axios.create({
            baseURL:`https://youtube.googleapis.com/youtube/v3`,
            params: {key:process.env.REACT_APP_YOUTUBE_API_KYE}
        });
    }

    async reply(params){
        return this.http.get("commentThreads",params);
    }
   
    async search(params){
        return this.http.get('search', params);
    }
    async videos(params){
        return this.http.get('videos', params);
    }
    async channels(params){
        return this.http.get('channels', params);
    }
    async relate(params){
        return this.http.get("search",params);
    }

}
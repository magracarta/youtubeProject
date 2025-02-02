
import axios from 'axios';

export default class FakeYoutube{
    constructor(){ }
   
    async search(keyword){
        return axios.get(`/videos/search.json`);
    }
    async relate(){
        return axios.get(`/videos/related.json`);
    }
    async videos(){
        return axios.get(`/videos/popular.json`);
    }
    async channels(){
        return axios.get(`/videos/channel.json`);
    }
    async reply(){
        return axios.get(`/videos/reply.json`);
    }
    
}
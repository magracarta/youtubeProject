
import axios from 'axios';

export default class FakeYoutube{
    constructor(){ }
    async search(keyword){
        return keyword ? this.#searchByKeyword() : this.#mostPopular()
    }

    async #searchByKeyword(){
        return axios.get(`/videos/search.json`).then(res=> res.data.items).then(items=>items.map(item=>({...item, id: item.id.videoId|| item.id.channelId})))
    }
    
    async #mostPopular(){
        return axios.get(`/videos/popular.json`).then(res=> res.data.items)
    }
}


export default class Youtube{
    constructor(apiClient){
        this.apliClient = apiClient;
    }
    async search(keyword){
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    }
    async channelImgageURL(id){
        return this.apliClient.channels({params:{
            part: "snippet,contentDetails,statistics",
            id
        }}).then((res)=>res.data.items[0].snippet);
    }
    async relatedVideos(id){
        return this.apliClient.relate({params:{
            part:"snippet",
            maxResults:25,
            q:id,
        }}).then(res=>res.data.items)
        .then(items=> items.map(item => ({...item, id: item.id.videoId|| item.id.channelId })))
    }
    async replylistFn(id){
        return this.apliClient.reply({params:{
            part:"snippet,replies",
            videoId:id,
        }}).then(res=>res.data.items).then(items=>items.map(item=>({...item,
            textcoment : item.snippet.topLevelComment.snippet.textDisplay,
            publishedAt:item.snippet.topLevelComment.snippet.publishedAt,
            name:item.snippet.topLevelComment.snippet.authorDisplayName,
            imgurl:item.snippet.topLevelComment.snippet.authorProfileImageUrl,
        })));
    }

    async #searchByKeyword(keyword){
        return this.apliClient.search({params:{
            part:"snippet",
            maxResults:25,
            q:keyword,
        }}).then(res=>res.data.items)
        .then(items=> items.map(item => ({...item, id: item.id.videoId|| item.id.channelId })))
    }

    async #mostPopular(){
       return this.apliClient.videos({params:{
        part:"snippet",
        maxResults:25,
        chart:"mostPopular",
        regionCode:"kr"
       }}).then(res=>res.data.items)
    }

}
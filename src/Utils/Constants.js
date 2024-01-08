const YOUTUBE_API_KEY = "AIzaSyB0hJh_HT1-xrpYZgv3jC2D8coF2DlpESo";

export const YOUTUBE_VIDEOS_URL= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${YOUTUBE_API_KEY}`
export const YOUTUBE_LIKED_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=${YOUTUBE_API_KEY}`
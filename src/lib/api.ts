import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

export async function getTopTracks() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        method: 'chart.getTopTracks',
        api_key: API_KEY,
        format: 'json',
        limit: 10
      }
    });
    
    console.log('API 响应数据:', JSON.stringify(response.data, null, 2));

    // 处理图片数据
    const tracks = response.data.tracks.track.map((track: any) => {
      const processedTrack = {
        ...track,
        image: {
          small: track.image.find((img: any) => img.size === 'small')['#text'],
          medium: track.image.find((img: any) => img.size === 'medium')['#text'],
          large: track.image.find((img: any) => img.size === 'large')['#text'],
          extralarge: track.image.find((img: any) => img.size === 'extralarge')['#text']
        }
      };
      
      console.log('处理后的歌曲数据:', JSON.stringify(processedTrack, null, 2));
      
      return processedTrack;
    });
    
    console.log('所有处理后的歌曲:', JSON.stringify(tracks, null, 2));
    
    return tracks;
  } catch (error) {
    console.error('获取热门歌曲失败:', error);
    return [];
  }
}

export async function getTopAlbums() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        method: 'chart.getTopAlbums',
        api_key: API_KEY,
        format: 'json',
        limit: 10
      }
    });
    
    // 处理图片数据
    const albums = response.data.albums.album.map((album: any) => ({
      ...album,
      image: {
        small: album.image.find((img: any) => img.size === 'small')['#text'],
        medium: album.image.find((img: any) => img.size === 'medium')['#text'],
        large: album.image.find((img: any) => img.size === 'large')['#text'],
        extralarge: album.image.find((img: any) => img.size === 'extralarge')['#text']
      }
    }));
    
    return albums;
  } catch (error) {
    console.error('获取热门专辑失败:', error);
    return [];
  }
}
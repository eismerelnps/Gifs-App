
export  const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=9umhUV87TBWDpl8O3Oh8kwIo59qyKiYr&q=${encodeURI( category )}&limit=5`;
    const result = await fetch(url);
    const { data } = await result.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_large,
      }
    })
    return gifs; 
  };


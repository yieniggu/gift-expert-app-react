export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ffjqnggDTbKdsTc7E322wcfsFeYQEjkb&q=${encodeURI(category)}&limit=10`;

    const { data } = await (await fetch(url)).json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  };
export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3c85f356ccmsh4c68664e65ad6efp1b3817jsnf23a490ddd16',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3c85f356ccmsh4c68664e65ad6efp1b3817jsnf23a490ddd16',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
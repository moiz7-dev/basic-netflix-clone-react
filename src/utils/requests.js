export const API_KEY = "4cd3f173c34eaa5b0de77b6244247ab6";
export const YT_API_KEY = 'AIzaSyDslBgXeaYJf9CdmiLXfFkaLzbziF5cK6Y';
export const YT_BASE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&';

const requests = [
    {
      fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      title: "NETFLIX ORIGINALS",
      isLargeRow: true,
    },
  {
    fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    title: "TRENDING NOW",  
  },
//   {
//     fetchUrl: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`,
//     title: "TOP RATED",
//   },
  {
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: "ACTION",
  },
  {
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    title: "COMEDY",
  },
  {
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: "HORROR",
  },
  {
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: "ROMANCE",
  },
  {
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: "DOCUMENTRIES",
  },
];

export default requests;

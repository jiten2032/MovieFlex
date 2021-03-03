import axios from 'axios';



export const getMovies = ({ payload }) => {
    const my_Key = 'adfb2ca98bde2c5ce8ecaffc4bb455ca';
    const data = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${my_Key}&language=en-US&page=1&include_adult=false&query=${payload}`);
    // console.log(data);
    return data

}
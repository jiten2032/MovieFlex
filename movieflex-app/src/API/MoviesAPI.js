import axios from 'axios';



export const getMovies = ({ Lists }) => {
    // console.log(Lists);
    const my_Key = 'adfb2ca98bde2c5ce8ecaffc4bb455ca';
    const data = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${my_Key}&language=en-US&page=1&include_adult=false&query=${Lists}`);
    // console.log(data);
    return data

}
import React from 'react';
import  Axios  from 'axios';
import "./Movies.css"

//rfce
const horrorMovies = "https://api.themoviedb.org/3/discover/movie?api_key=a2e9a38e44e0553a82c57159478c5950&with_genres=27";
const myImage = "https://image.tmdb.org/t/p/original"

// axios module --> useEffect() -->react

function HorrorMovies() {

    const [allMovies, setAllMovies] = React.useState([])

    // allMovies = [{}, {},{},......]

    React.useEffect(function()
    {
        async function fetchData(){
            // write the logic to fetch all the movies information
          const output = await Axios.get(horrorMovies)
          // if we use await keyword we should use 'async' before function as shown in above.(Make function as asynchronus function)
          // if we dont use await then there is no guranty that we will get all movie information
          const result = output.data.results
          setAllMovies(result)
        }

        fetchData()

    },[])

  return (
    <div>
        <h1>HORROR MOVIES</h1>
       <div className='alldiv'>
       {
            allMovies.map(function(i)
            {
                const imageName = i.backdrop_path;
                return(
                <div className='horrorMoviesdiv'>
                <img src={myImage+imageName} className="horrorMoviesimage"/>
                </div>
                )

                
            })
        }
       </div>
    </div>
  )
}

export default HorrorMovies;

//axios module --> that will basically send request from React app to TMDB application
// npm install axios

//https://image.tmdb.org/t/p/original  



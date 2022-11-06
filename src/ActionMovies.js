import React, { useEffect } from 'react'
import Axios from 'axios'
import "./Movies.css"

const actionMovies = "https://api.themoviedb.org/3/discover/movie?api_key=a2e9a38e44e0553a82c57159478c5950&with_genres=28" 
const myImage = "https://image.tmdb.org/t/p/original"

function ActionMovies() {
    const[myactionMovies, setActionMovies]= React.useState([])

    React.useEffect(function(){

       async function fetchData(){
        //inside this function we will write the logic to get all the action movies
            const ouput = await  Axios.get(actionMovies)
            setActionMovies(ouput.data.results)
        }
        fetchData() 
    }, [])
  return (
    <div>
      <h1>ACTION MOVIES</h1>
     <div className='alldiv'> 
     {
        myactionMovies.map(function(i){
            const imageName = i.backdrop_path;
                return(
                <div className='actionMoviesdiv'>
                <img src={myImage+imageName} className="actionMovies"/>
                </div> 
                )
        })
      }
     </div>
    </div>
  )
}

export default ActionMovies


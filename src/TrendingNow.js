import React from 'react'
import Axios  from 'axios'
import "./Movies.css"

const trendingNowUrl="https://api.themoviedb.org/3/trending/all/week?api_key=a2e9a38e44e0553a82c57159478c5950&language=en-US"
const myImage = "https://image.tmdb.org/t/p/original"


function TrendingNow() {

    const [allMovies, setAllMovies] = React.useState([])


    React.useEffect(function()
    {
        async function fetchData(){
            // write the logic to fetch all the movies information
          const output = await Axios.get(trendingNowUrl)
          // if we use await keyword we should use 'async' before function as shown in above.(Make function as asynchronus function)
          // if we dont use await then there is no guranty that we will get all movie information
          const result = output.data.results
          setAllMovies(result)
        }

        fetchData()

    },[])
  return (
    <div>
    <h1>Tranding Now</h1>
    <div className='alldiv'>
       {
            allMovies.map(function(i)
            {
                const imageName = i.backdrop_path;
                return(
                <div className='trendingoriginaldiv'>
                <img src={myImage+imageName} className="trendingimage"/>
                </div>
                )
 
                
            })
        }
       </div>
    </div>
  )
}

export default TrendingNow

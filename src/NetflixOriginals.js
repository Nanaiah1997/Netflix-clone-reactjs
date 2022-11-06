import React from 'react';
import  Axios  from 'axios';
import "./Movies.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';// will also help to get the video id of a particular movie that has been clicked

//rfce
const netflixOriginals = "https://api.themoviedb.org/3/discover/tv/?api_key=a2e9a38e44e0553a82c57159478c5950&with_network=123";
const myImage = "https://image.tmdb.org/t/p/original"

// axios module --> useEffect() -->react

function NetflixOriginals() {

    const [allMovies, setAllMovies] = React.useState([])
    const [id, setId] = React.useState([])

    // allMovies = [{}, {},{},......]

    React.useEffect(function()
    {
        async function fetchData(){
            // write the logic to fetch all the movies information
          const output = await Axios.get(netflixOriginals)
          // if we use await keyword we should use 'async' before function as shown in above.(Make function as asynchronus function)
          // if we dont use await then there is no guranty that we will get all movie information
          const result = output.data.results
          setAllMovies(result)
        }

        fetchData()


    },[])
    function playTheTrailer(data){
      // we need to get the video id of the movie we click
      //movieTrailer( "movie name")--> youtube --=> and will try to get the video id
      movieTrailer(data.name || "")
      .then(function(output){
        const search = new URLSearchParams(new URL(output).search)
         setId(search.get("v"))
      })
      .catch(function(){

      })
    }

    const myOptions ={
      height: "600px",
      width:"100%"
    }

  return (
    <div>
        <h1>netflix originals</h1>
       <div className='alldiv'>
       {
            allMovies.map(function(i)
            {
                const imageName = i.backdrop_path;
                return(
                <div className='netflixoriginaldiv'>
                <img src={myImage+imageName} className="netflixoriginalimage" onClick={function(){
                  playTheTrailer(i)
                }}/>
                </div>
                )

                
            })
        }
       </div>
       {/* write the logic to connect React with youtube */}
       {id && <YouTube videoId={id} opts={myOptions}/> }
       
    </div>
  )
}

export default NetflixOriginals;

//axios module --> that will basically send request from React app to TMDB application
// npm install axios

// opts -->options

//https://image.tmdb.org/t/p/original  

// youtube application --> trailler of all the movies

//click on a particular image{Movie Image}--> Movie info --> send it to  youtube app --> response/output as trailer

// react-youtube(connect react app with the youtube) module and movie-trailer module

// movie-trailer module(basicall get the trailer of particular movie)

// npm install react-youtube
//npm install movie-trailer


// every video in  the youtube will have video ID
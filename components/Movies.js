import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Upload from './Upload';
import Banner from './Banner';
import Logo from './Logo';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  useEffect(async () => {
    const result = await axios('/api/airtable', {
      headers: { accept: 'Accept: application/json' },
    });

    setMovies(result.data);
    console.log(result.data);
  }, []);

  return (
    <div>
      <header className='Header'>
        <Logo />
        <Upload />
      </header>
      {videoUrl == '' ? (
   <Banner /> 
      ) : (
        <div>
          <ReactPlayer url={videoUrl} controls={true} playing={true} width='100vw' height="70vh" />
        </div>
      )}
<div className="movielist_title"> <h2>Movie list</h2>
     </div>
      <div className="movielist" >
        {movies.map((movie,id) => {
          return (
            <div key={id}
              className='Item'
              onClick={() => {
             
           
                  setVideoUrl(movie.Videolink);
                  setCoverUrl(movie.Thumbnail);
            
              }}
              style={{
                backgroundImage: `url(` + movie.Thumbnail + `)`,
                margin: 5,
              }}
            >
              <div className='overlay'>
                <div className='title'>{movie.Name}</div>
                <div className='rating'>{movie.Tag}</div>
              </div>
            </div>
          );
        })}{' '}
      </div>
    </div>
  );
}

export default Movies

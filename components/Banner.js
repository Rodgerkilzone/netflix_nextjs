import React from 'react'

const Banner = () => {
  return (
    <div
      className='banner'
      style={{
      
        backgroundImage: `url("https://img1.looper.com/img/gallery/easter-eggs-in-the-flash-only-real-fans-noticed/intro-1576603048.jpg")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>The Flash</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <h1 className='banner__description'>The flashpoint</h1>
      </div>
      <div
        className='banner--fadeBottom'
        style={{ position: 'absolute', bottom: 0 }}
      ></div>
    </div>
  );
}

export default Banner
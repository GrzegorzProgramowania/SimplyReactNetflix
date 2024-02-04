import { useState } from 'react';
import YouTube from 'react-youtube';
import './App.css'

function App() {
  const [trailerURL, setTrailerURL] = useState('');
  const handleClick = (id) => {
    setTrailerURL(id);
  };

  const Movies = [
    {
    src: "https://cdn.newonce.me/uploads/images/48947/Rebel_Moon_cover_photo.jpg",
      videoId: "fhr3MzT6exg",
    },
    {src: "https://anygoodfilms.com/wp-content/uploads/2023/11/NAPO_Feature_FP_01964_r_2000x831_thumbnail.jpg",
    videoId: "d9E8K405PRM"},

    {src: "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/YLpt67-410.jpg",
    videoId: "RlbR5N6veqw"},

    {src: "https://nevermore-horror.com/wp-content/uploads/2018/11/IMG_0129_1.jpg",
    videoId: "XOsZq_5s-ak"},

    {src: "https://assets-prd.ignimgs.com/2023/01/07/a-man-called-otto-hero-1673052643920.jpg",
    videoId: "eFYUX9l-m5I"},
  ];

  return (
    <>
    {/* navigation */}
      <header className='nav nav_black'>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetflixLogo"/>
        <img 
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="AvatarLogo"/>
      </header>

      {/* banner */}
      <section className="banner">
        <div className="banner_content">
          <h1 className="banner_title">Rebel Moon</h1>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h2 className="description">Movie description...</h2>
        </div>
      </section>

      {/* row */}
      <section className="row">
        <h2>Trending now</h2>
        <div className="row_posters">
          {Movies.map((movie) => (
            <img onClick={() => handleClick(movie.videoId)} className="row_poster" key={movie.videoId} src={movie.src}/>
            
          ))}

        </div>
      </section>
      {trailerURL && <YouTube videoId={trailerURL} />}
    </>
  )
}

export default App

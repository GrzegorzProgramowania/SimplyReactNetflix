import { useState } from 'react';
import YouTube from 'react-youtube';
import './App.css'

function App() {
  const [trailerURL, setTrailerURL] = useState('');
  const [bannerBackground, setBannerBackground] = useState('https://cdn.newonce.me/uploads/images/48947/Rebel_Moon_cover_photo.jpg');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDescription, setMovieDescription] = useState('');

  const handleClick = (id, src,title, description) => {    setTrailerURL(id);
  setBannerBackground(src);
  setMovieTitle(title);
  setMovieDescription(description);
  };

  const Movies = [
    {
    src: "https://cdn.newonce.me/uploads/images/48947/Rebel_Moon_cover_photo.jpg",
      videoId: "fhr3MzT6exg",
      movieTitle: "Rebel Moon",
      movieDescription: "When a peaceful settlement on the edge of a distant moon finds itself threatened by the armies of a tyrannical ruling force, a mysterious stranger living among its villagers becomes their best hope for survival."
    },

    {
      src: "https://anygoodfilms.com/wp-content/uploads/2023/11/NAPO_Feature_FP_01964_r_2000x831_thumbnail.jpg",
      videoId: "d9E8K405PRM",
      movieTitle: "Napoleon",
      movieDescription: "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine..."},
    
    {
      src: "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/YLpt67-410.jpg",
      videoId: "RlbR5N6veqw",
      movieTitle: "Poor Things",
      movieDescription: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter."
    },

    {
      src: "https://nevermore-horror.com/wp-content/uploads/2018/11/IMG_0129_1.jpg",
      videoId: "XOsZq_5s-ak",
      movieTitle: "Baghead",
      movieDescription: "A young woman inherits a run-down pub and discovers a dark secret within its basement - Baghead - a shape-shifting creature that will let you speak to lost loved ones, but not without consequence."
    },

     {src: "https://assets-prd.ignimgs.com/2023/01/07/a-man-called-otto-hero-1673052643920.jpg",
     videoId: "eFYUX9l-m5I",
     movieTitle: "A Man Called Otto",
     movieDescription: "Otto is a grump who's given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around."
  },
    
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
 <section className='banner' style={{ backgroundImage: `url('${bannerBackground}')` }}>
        <div className='banner_content'>
          <h1 className='banner_title'>{movieTitle}</h1>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
          <h2 className='description' style={{ width: '50%',overflowWrap: 'break-word',marginTop: '40px' }}>{movieDescription}</h2>
        </div>
      </section>

  {/* row */}
  <section className='row'>
    <h2>Trending now</h2>
    <div className='row_posters'>
      {Movies.map((movie) => (
        <img onClick={() => handleClick(movie.videoId, movie.src, movie.movieTitle, movie.movieDescription)} className='row_poster' key={movie.videoId} src={movie.src} />
      ))}
    </div>
  </section>
  {trailerURL && <YouTube videoId={trailerURL} className="Youtube"/>}
</>
  );
}

export default App

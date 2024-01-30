import './App.css'
function App() {

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
          <h1 className="banner_title">The Witcher</h1>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h2 className="description">Opis filmu...</h2>
        </div>
      </section>
    </>
  )
}

export default App

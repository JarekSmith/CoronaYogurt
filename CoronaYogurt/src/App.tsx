import './App.css'
import ServerStatus from './components/server-status'
import Post from './components/post'
import logo from './assets/images/coronayogurt.png';

function App() {

  return (
    <>
      <img id="head-logo" src={logo} />
      <nav>
        <a className="xp-button" href="https://www.jareksmith.com">YouTube</a>
        <a className="xp-button" id="btn-music">Music</a>
        <a className="xp-button" href="https://www.youtube.com/@mages.8096">MAGES.</a>
      </nav>
      <div id="status-box">
        {ServerStatus({type: "Vanilla", address: "mc.fartsound.us"})}
        {ServerStatus({type: "Modded", address: "play.fartsound.us"})}
      </div>
      <div id="post-box">
        {Post({title: "Deez Nuts", date: "7/6/2026", body:" Something came in the mail today"})}
      </div>
    </>
  )
}

export default App

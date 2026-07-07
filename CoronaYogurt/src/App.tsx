import './App.css'
import ServerStatus from './components/server-status'
import logo from './assets/images/coronayogurt.png';

function App() {

  return (
    <>
      <img id="head-logo" src={logo} />
      <nav>
        <a href="https://www.jareksmith.com">YouTube</a>
        <a id="btn-music">Music</a>
        <a href="https://www.youtube.com/@mages.8096">MAGES.</a>
      </nav>
      <div id="status-box">
        {ServerStatus("Vanilla", "mc.fartsound.us")}
        {ServerStatus("Modded", "play.fartsound.us")}
      </div>
    </>
  )
}

export default App

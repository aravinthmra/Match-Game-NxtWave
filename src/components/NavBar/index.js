import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <nav className="match-game-navbar1">
      <div className="match-game-logo-container1">
        <img
          className="match-game-logo-image1"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="stats-container1">
        <li className="timer-container1">
          <p>Score: </p>
          <p className="color-text1">{score}</p>
        </li>
        <li className="timer-container1">
          <img
            className="timer-logo-image1"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="color-text1">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

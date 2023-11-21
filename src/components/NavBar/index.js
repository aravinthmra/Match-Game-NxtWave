import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  state = {timer: 60}

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  onTimeUp = () => {
    clearInterval(this.timerID)
    const {onGameOver} = this.props
    onGameOver()
  }

  tick = () => {
    this.setState(prevState => {
      const {timer} = prevState
      if (timer === 0) {
        this.onTimeUp()
        return {timer: 0}
      }
      return {timer: prevState.timer - 1}
    })
  }

  render() {
    const {timer} = this.state
    const {score} = this.props
    return (
      <nav className="match-game-navbar1">
        <div className="match-game-logo-container1">
          <img
            className="match-game-logo-image1"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        <div className="stats-container1">
          <p>
            Score: <span>{score}</span>
          </p>
          <div className="timer-container1">
            <img
              className="timer-logo-image1"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <span>{timer} sec</span>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar

import {Component} from 'react'
import NavBar from '../NavBar'
import Scorecard from '../Scorecard'
import Game from '../Game'
import './index.css'

class MatchGame extends Component {
  state = {score: 0, isGameOver: false, timer: 60}

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  onTimeUp = () => {
    clearInterval(this.timerID)
    this.onGameOver()
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

  onGameOver = () => {
    clearInterval(this.timerID)
    this.setState({isGameOver: true})
  }

  addScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  restartGame = () => {
    this.setState({score: 0, isGameOver: false, timer: 60})
    this.componentDidMount()
  }

  render() {
    const {score, isGameOver, timer} = this.state
    return (
      <div className="bg-container1">
        <NavBar score={score} onGameOver={this.onGameOver} timer={timer} />
        <div className="bg-container2">
          {isGameOver ? (
            <Scorecard score={score} restartGame={this.restartGame} />
          ) : (
            <Game onGameOver={this.onGameOver} addScore={this.addScore} />
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame

import './index.css'

const Scorecard = props => {
  const {score, restartGame} = props

  const onClickingPlayAgain = () => {
    restartGame()
  }

  return (
    <div className="scorecard-container1">
      <img
        className="trophy-image1"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score-para1">YOUR SCORE</p>
      <p className="your-score-para1">{score}</p>
      <button
        className="playAgain-button1"
        onClick={onClickingPlayAgain}
        type="button"
      >
        <img
          className="replay-logo-image1"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p className="button-text1"> Play Again</p>
      </button>
    </div>
  )
}

export default Scorecard

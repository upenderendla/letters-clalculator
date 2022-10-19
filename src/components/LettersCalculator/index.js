// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeEnter = event => {
    const {value} = event.target
    this.setState(prevState => ({count: value}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="inner-container">
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="paragraph" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              className="input-style"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onChangeEnter}
              id="phraseText"
            />
            <p className="letters-count">No.of letters: {count.length}</p>
          </div>
          <img
            className="img-size"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator

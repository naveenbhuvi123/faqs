import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  onCLickButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isClicked} = this.state

    if (isClicked) {
      return (
        <div>
          <hr className="horizon-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const plusImg =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const minusImg =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const isClickedImage = isClicked ? plusImg : minusImg
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <li className="faq-list-container">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button className="button" type="button" onClick={this.onCLickButton}>
            <img src={isClickedImage} className="icon-img" alt={altText} />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem

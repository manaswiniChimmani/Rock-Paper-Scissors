import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Results from '../Results'
import Choices from '../Choices'

import {
  BgContainer,
  ScoreCardContainer,
  Container1,
  Heading,
  Container2,
  Score,
  ScoreValue,
  ChoiceImagesContainer,
  PopUpContainer,
  RulesButton,
  RulesImgContainer,
  RulesImage,
  CloseBtnContainer,
  CloseButton,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    yourChoice: {},
    opponentChoice: {},
    isGameOver: false,
    score: 0,
    result: '',
  }

  onClickPlayAgain = () => this.setState({isGameOver: false})

  getGameResult = () => {
    const {yourChoice, opponentChoice, result} = this.state
    return (
      <Results
        yourChoice={yourChoice}
        opponentChoice={opponentChoice}
        result={result}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetChoice = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isGameOver: true,
        yourChoice: [id, image],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        isGameOver: true,
        yourChoice: [id, image],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        isGameOver: true,
        yourChoice: [id, image],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === id) {
      this.setState({
        isGameOver: true,
        yourChoice: [id, image],
        opponentChoice: choicesList[number],
        result: 'IT IS DRAW',
      })
    } else {
      this.setState(prevState => ({
        isGameOver: true,
        yourChoice: [id, image],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    }
  }

  onChoiceImages = () => {
    const {choicesList} = this.props
    return (
      <ChoiceImagesContainer>
        {choicesList.map(each => (
          <Choices
            key={each.id}
            choiceDetails={each}
            onChoice={this.onGetChoice}
          />
        ))}
      </ChoiceImagesContainer>
    )
  }

  render() {
    const {isGameOver, score} = this.state
    return (
      <BgContainer>
        <ScoreCardContainer>
          <Container1>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </Container1>
          <Container2>
            <Score>Score</Score>
            <ScoreValue>{score}</ScoreValue>
          </Container2>
        </ScoreCardContainer>
        {isGameOver ? this.getGameResult() : this.onChoiceImages()}
        <PopUpContainer>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <RulesImgContainer>
                <CloseBtnContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                </CloseBtnContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImgContainer>
            )}
          </Popup>
        </PopUpContainer>
      </BgContainer>
    )
  }
}

export default RockPaperScissors

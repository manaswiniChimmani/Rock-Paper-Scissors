import {
  ResultContainer,
  ChoiceResultContainer,
  ImgContainer,
  Text,
  ResultChoiceImage,
  PlayAgainButtonContainer,
  PlayAgainBtn,
} from './styledComponents'

const Results = props => {
  const {yourChoice, opponentChoice, result, playAgain} = props
  const {imageUrl} = opponentChoice

  const onClickPlayAgainBtn = () => {
    playAgain()
  }

  return (
    <ResultContainer>
      <ChoiceResultContainer>
        <ImgContainer>
          <Text>YOU</Text>
          <ResultChoiceImage src={yourChoice[1]} alt="your choice" />
        </ImgContainer>
        <ImgContainer>
          <Text>OPPONENT</Text>
          <ResultChoiceImage src={imageUrl} alt="opponent choice" />
        </ImgContainer>
      </ChoiceResultContainer>
      <Text>{result}</Text>
      <PlayAgainButtonContainer>
        <PlayAgainBtn type="button" onClick={onClickPlayAgainBtn}>
          Play Again
        </PlayAgainBtn>
      </PlayAgainButtonContainer>
    </ResultContainer>
  )
}
export default Results

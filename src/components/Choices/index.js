import {ChoicesContainer, ChoiceBtn, Image} from './styledComponents'

const Choices = props => {
  const {choiceDetails, onChoice} = props
  const {id, imageUrl} = choiceDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onChoice(id, imageUrl)
  }

  return (
    <ChoicesContainer>
      <ChoiceBtn
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <Image src={imageUrl} alt={id} />
      </ChoiceBtn>
    </ChoicesContainer>
  )
}

export default Choices

import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;

  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
`

export const Container1 = styled.div``

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 18px;
  color: #ffffff;
`

export const Container2 = styled.div`
  margin: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`

export const Score = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  text-align: center;
  margin: 0;
`

export const ScoreValue = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
`

export const ChoiceImagesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 50%;
  height: 50%;
`

export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`

export const RulesButton = styled(PlayAgainButton)`
  font-family: 'Bree Serif';
  width: 100px;
`

export const RulesImgContainer = styled.div`
  background-color: white;
  padding: 40px;
`

export const RulesImage = styled.img`
  width: 500px;
`

export const CloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const CloseButton = styled.button`
  border: 0;
  //   background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

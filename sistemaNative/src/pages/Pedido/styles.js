import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 30px;
  background: #fff;
  position: relative;
  top: 0px;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  background: #fff;
  border-radius: 4px;
  padding: 0px 20px;
  margin-bottom: 10px;
  height: 52px;
  font-size: 16px;
  color: #333;
`
export const Button = styled.TouchableOpacity`
  background: #f00;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`
export const Error = styled.Text`
  color: #fff;
  background: #ff817e;
  border-radius: 4px;
  margin: 0 10px;
  padding: 10px 0px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`
export const SignText = styled.Text`
  color: #fff;
  margin: 20px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`

import styled from 'styled-components/native';
import Input from '../../components/Input';

// container com safeareaview pra ele nao subir em cima da status bar
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 20 },
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch; /* para ocupar toda a largura possível */
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 5px;
  background: #3b9eff;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 15px;
  background: #f64c75;
  padding: 15px;
  border-radius: 4px;

  align-items: center;
`;

export const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

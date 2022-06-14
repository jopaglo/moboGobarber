import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

/* existe um comportamento do teclado subir em cima do input no IOS,
por isso vou ajustar esse detalhe conforme a plataforma ativa */
export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch; /* para ocupar toda a largura possível */
  margin-top: 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
export const RegisterLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const RegisterLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

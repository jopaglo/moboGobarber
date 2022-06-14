import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { registerRequest } from '../../store/modules/auth/actions';
import Background from '../../components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  RegisterLink,
  RegisterLinkText,
} from './styles';
import logo from '../../assets/logo.png';

export default function Register({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleCreateAccount() {
    dispatch(registerRequest(name, email, password));
    setName('');
    setEmail('');
    setPassword('');
    navigation.navigate('Login');
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleCreateAccount}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleCreateAccount}>
            Criar conta
          </SubmitButton>
        </Form>

        <RegisterLink onPress={() => navigation.navigate('Login')}>
          <RegisterLinkText>Já tenho uma conta.</RegisterLinkText>
        </RegisterLink>
      </Container>
    </Background>
  );
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

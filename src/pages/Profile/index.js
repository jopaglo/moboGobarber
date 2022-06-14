import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest } from '../../store/modules/user/actions';
import Background from '../../components/Background';
import { logout } from '../../store/modules/auth/actions';
import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SubmitButtonText,
  Separator,
  LogoutButton,
  LogoutButtonText,
} from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleUpdate() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil </Title>
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

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha atual"
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme a nova senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleUpdate}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleUpdate}>
            <SubmitButtonText>Atualizar perfil</SubmitButtonText>
          </SubmitButton>

          <LogoutButton onPress={handleLogout}>
            <LogoutButtonText> Sair do GobarberApp </LogoutButtonText>
          </LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

export default Profile;

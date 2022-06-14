import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';

// children é todo o conteudo que esta dentro da tag botao, texto e outros conteudos
export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

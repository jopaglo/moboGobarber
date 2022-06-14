import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Bakcground from '../../../components/Background';
import api from '../../../services/api';
import { Container, ProviderList, Provider, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }
    loadProviders();
  }, []);

  return (
    <Bakcground>
      <Container>
        <ProviderList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() => navigation.navigate('SelectDate', { provider })}
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Bakcground>
  );
}

SelectProvider.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.element])
    .isRequired,
};

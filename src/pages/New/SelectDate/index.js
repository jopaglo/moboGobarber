import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Background from '../../../components/Background';
import { Container, HourList, Hour, Title } from './styles';
import DateInput from '../../../components/DateInput';
import api from '../../../services/api';

export default function SelectDate({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  // eu pego o parametro via parametro route (route.params)
  const { provider } = route.params;

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(), // get time retorna o formato em timestamp
        },
      });
      setHours(response.data);
    }
    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              enabled={item.available}
              onPress={() => handleSelectHour(item.value)}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDate.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  route: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

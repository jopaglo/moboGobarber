import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-top: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* efeito para agendamentos que já passaram */
  opacity: ${(props) => (props.past ? 0.5 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #888;
  margin-top: 4px;
`;

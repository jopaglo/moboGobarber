import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SelectProvider from './pages/New/SelectProvider';
import SelectDate from './pages/New/SelectDate';
import Confirm from './pages/New/Confirm';

const Stack = createStackNavigator();
const AppTabs = createBottomTabNavigator();
const NewAppointmentStack = createStackNavigator();

function newAppointment({ navigation }) {
  return (
    // <NavigationContainer>
    <NewAppointmentStack.Navigator
      initialRouteName="SelectProvider"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTitleAlign: 'center',
      }}
    >
      <NewAppointmentStack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
          // sempre que for renderizar um item é preciso uma funcao
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <NewAppointmentStack.Screen
        name="SelectDate"
        component={SelectDate}
        options={{
          title: 'Selecione o horário',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectProvider');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <NewAppointmentStack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar agendamento',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectDate');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </NewAppointmentStack.Navigator>
    //  </NavigationContainer>
  );
}

export default function Routes() {
  const loged = useSelector((state) => state.auth.loged);
  return loged ? (
    <NavigationContainer>
      <AppTabs.Navigator
        screenOptions={{
          unmountOnBlur: true, // vai resetar a rota toda vez que eu acessar ela
        }}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#fff',
          inactiveTintColor: 'rgba(255,255,255,0.6)',
          style: {
            backgroundColor: '#8d41a8',
          },
        }}
      >
        <AppTabs.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Agendamentos',
            tabBarIcon: ({ color }) => (
              <Icon name="event" size={20} color={color} />
            ),
          }}
        />

        <AppTabs.Screen
          name="New"
          component={newAppointment}
          options={{
            tabBarVisible: false,
            tabBarLabel: 'Agendar',
            tabBarIcon: () => (
              <Icon
                name="add-circle-outline"
                size={20}
                color="rgba(255,255,255,0.6)"
              />
            ),
          }}
        />
        <AppTabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu perfil',
            tabBarIcon: ({ color }) => (
              <Icon name="person" size={20} color={color} />
            ),
          }}
        />
      </AppTabs.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

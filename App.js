import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Info from './src/screens/Info';
import UserList from './src/screens/UserList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './src/screens/Form';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Home1">
        <Stack.Screen  name='Home1' component={Home}/>
        <Stack.Screen name='Form' component={Form} />
            <Stack.Screen  name='Info' component={Info}/>
            <Stack.Screen  name='UserList' component={UserList}/>
          
        </Stack.Navigator>
       </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

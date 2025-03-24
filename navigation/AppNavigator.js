import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Home from '../src/Home/home';
import LoginPage from '../src/auth/login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const userToken = useSelector(state => state.auth.userToken);
  const [isAuth, setIsAuth] = useState(null);
  
  useEffect(() => {
    setIsAuth(userToken);
  }, [userToken]); // Re-run when userToken updates

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {isAuth ? ( */}
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* ) : ( */}
          <Stack.Screen name="LOGIN" component={LoginPage} options={{ headerShown: false }} />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

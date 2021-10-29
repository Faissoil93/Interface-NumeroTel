import React from 'react';


// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// screens
import Accueil from '../src/Accueil';







const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer style={{ backgroundColor: 'red' }}> 
      <Stack.Navigator
        

        
        initialRouteName="App"
        >

                
  
        <Stack.Screen name="Accueil" component={Accueil} />
        
        
        
       
       
        
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootStack;




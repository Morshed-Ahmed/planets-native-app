import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet, } from 'react-native';
import Text from './src/components/text/text';
import Details from './src/screens/details';
import Home from './src/screens/home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  })

  if(!loaded){
    return(
      <Text>Font is loading....</Text>
    )
  }
  return (
    <>
      <NavigationContainer style={styles.container} >
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

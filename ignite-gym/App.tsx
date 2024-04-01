import {
  Roboto_400Regular as Roboto400Regular,
  Roboto_700Bold as Roboto700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar, Text, View } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto400Regular,
    Roboto700Bold,
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202024',
      }}
    >
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? (
        <Text style={{ fontFamily: 'Roboto700Bold' }}>Hello world!</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}

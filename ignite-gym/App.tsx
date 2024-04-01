import { Loading } from '@components/Loading'
import {
  Roboto_400Regular as Roboto400Regular,
  Roboto_700Bold as Roboto700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { SignIn } from '@screens/SignIn'
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'

import { config } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto400Regular,
    Roboto700Bold,
  })

  return (
    <NativeBaseProvider theme={config}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  )
}

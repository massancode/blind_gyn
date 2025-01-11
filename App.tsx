
import { StyleSheet,  View,StatusBar } from 'react-native';
import { useFonts,Roboto_700Bold,Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Center, GluestackUIProvider,Text} from '@gluestack-ui/themed';
import { config,gluestackUIConfig } from './config/gluestack-ui.config';
import { Loadgin } from '@components/Loading';
import { Signin } from '@components/screens/Signin';
import { SignUp } from '@components/screens/SigUp';


export default function App() {
  const [fontsLoaded] = useFonts ({Roboto_700Bold,Roboto_400Regular})

  return (
    <GluestackUIProvider config={config}>
       
      <StatusBar backgroundColor='transparent' translucent barStyle="light-content" />

      {fontsLoaded ?  <SignUp/> : <Loadgin backGorundColor={'$gray700'} colorSpineer='$green500'/>}
      
     

    </GluestackUIProvider>
  );
}



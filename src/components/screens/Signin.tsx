import { Image, VStack,Text, Center } from "@gluestack-ui/themed";

import BackGroundImage from  "@assets/background.png"
import Logo from "@assets/logo.svg"


export function Signin () {

    return(
        <VStack flex={1} bg="$gray700" >
         
          <Image source={BackGroundImage} w="$full" h={624}  defaultSource={BackGroundImage} alt="Meninas na bike" position="absolute"  />


            <Center my="$24">
               
              <Logo/>
               
              <Text color="$gray100" fontSize={"$sm"} >
                Treine sua mente e seu corpo
              </Text>

            </Center>


        </VStack>
    )

}
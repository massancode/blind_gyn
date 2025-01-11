import { Image, VStack,Text, Center, Heading,ScrollView  } from "@gluestack-ui/themed";

import BackGroundImage from  "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input } from "@components/input";
import { Button } from "@components/button"



export function Signin () {

    return(
      <ScrollView contentContainerStyle={{flexGrow:1,}} showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg="$gray700" >
         
          <Image source={BackGroundImage} w="$full" h={624}  defaultSource={BackGroundImage} alt="Meninas na bike" position="absolute"  />

            <VStack flex={1} px="$10" pb='$16'>
            <Center my="$24">
               
              <Logo/>
               
              <Text color="$gray100" fontSize={"$sm"} >
                Treine sua mente e seu corpo
              </Text>

            </Center>

            <Center gap={"$2"}>

              <Heading color={'$gray100'}  >Acesse a conta</Heading>
               
              <Input placeHolderText="Insira seu e-mail"  keyboardType="email-address" autoCapitalize="none"/>

              <Input placeHolderText="Insira seu sua senha" secureTextEntry />

              <Button title="Entrar"  />  
            </Center>

            <Center flex={1} justifyContent="flex-end" mt={'$4'}>

               <Text color={'$gray100'} fontSize={'$sm'} mb={'$3'} fontFamily="$body" >  Ainda não possui conta ?</Text>

               <Button title="Criar conta"  variant="outline" />  
            </Center>


            </VStack>


        </VStack>
      </ScrollView>  
    )

}
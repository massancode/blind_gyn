import { Image, VStack,Text, Center, Heading,ScrollView  } from "@gluestack-ui/themed";

import BackGroundImage from  "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input } from "@components/input";
import { Button } from "@components/button"



export function SignUp() {

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

            <Center gap={"$2"} flex={1}>

              <Heading color={'$gray100'}  >Crie Sua  Conta</Heading>

              <Input placeHolderText="Seu nome" />
               
              <Input placeHolderText="Insira seu e-mail"  keyboardType="email-address" autoCapitalize="none"/>

              <Input placeHolderText="Insira seu sua senha" secureTextEntry />

              <Button title="Criar e acessar "  mt={"$12"}/>  

            </Center> 

             <Button title="Voltar para o loguin" variant="outline" />    

          </VStack>


        </VStack>
      </ScrollView>  
    )

}
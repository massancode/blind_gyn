import {Button as GluestackButton,Text,ButtonSpinner } from "@gluestack-ui/themed"
import { ComponentProps } from "react"


type props = ComponentProps<typeof GluestackButton> & {
    title:string,
    isLoading?:boolean
}


export function Button ({title,isLoading,...rest}:props){
 
    return(
        <GluestackButton w='$full' h='$14' bg='$green500' borderWidth='$0' borderColor= '$green500' rounded='$sm' $active-bg='$green700' disabled={isLoading} {...rest}>

          { isLoading ? <ButtonSpinner  color='$white' /> :  <Text color="$white" fontFamily="$heading" fontSize={'$sm'} >{title}</Text>}
        
        </GluestackButton>

    )
    
}
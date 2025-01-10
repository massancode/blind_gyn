import {Input as GluestackInput, InputField} from  "@gluestack-ui/themed"
import { ComponentProps } from "react";


type props = ComponentProps <typeof InputField> & {
   placeHolderText?: string;
}

export function Input ({placeHolderText,...rest}:props){
    return (
         <GluestackInput bg='$gray700' h='$14' px='$4' borderWidth={'$0'}  borderRadius='$md' $focus={{borderColor:'$green500',borderWidth:1}} >

            <InputField placeholder={placeHolderText} placeholderTextColor='$gray300' color="$white"  fontFamily="$body" {...rest}></InputField>

         </GluestackInput>
    )
}

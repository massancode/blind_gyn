import  {Center,Spinner} from "@gluestack-ui/themed"

type props = {
    colorSpineer?:string,
    backGorundColor?:string
}

export function Loadgin({colorSpineer,backGorundColor}:props){
    return(
        <Center flex={1} bg={backGorundColor} >
            <Spinner color={colorSpineer} />
        </Center>
    )
}



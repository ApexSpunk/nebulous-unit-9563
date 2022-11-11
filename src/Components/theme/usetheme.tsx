import { useState } from "react"

const Light={
    textColor:"white"
}
const Dark={
    textColor:"black"
}
export function useTheme(){
const [Theme,setTheme]=useState(Dark)

const ChangeTheme=(value:string)=>{
setTheme(value==="light"?{...Light}:{...Dark})
}
return {Theme,ChangeTheme}

}
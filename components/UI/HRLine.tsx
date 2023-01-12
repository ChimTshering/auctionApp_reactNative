import { View, StyleSheet } from "react-native"
type linePorp={
  color?:string
}
export const HorizontalLine = ({color}:linePorp)=>{
  return<View style= {[style.root,{borderBottomColor:`${color? color:'white'}`}]}></View>
}

const style = StyleSheet.create({
  root:{
    width:'98%',
    height:1,
borderBottomWidth:1,
alignSelf:'center',
marginBottom:8,
marginTop:4

  }
})
import { useCallback, useEffect, useState } from "react";
import { Text, View, TextInput,StyleSheet, Pressable, KeyboardTypeOptions, TextInputProps, TextInputChangeEventData, NativeSyntheticEvent } from "react-native"
import { Color } from "../../constent/color";

import { Ionicons } from '@expo/vector-icons'; 

type InputProps = {
  label: string;
  value: string;
  textChange: (value: string) => void;
  isPasswrd?: boolean;
  keyType?: KeyboardTypeOptions;
  placeholder?: string;
  textAlign?: "center" | "auto" | "bottom" | "top";
  multiline?:boolean
};

export const InputText = ({label,textChange,isPasswrd,value,keyType, placeholder, textAlign,multiline}:InputProps) => {
  const [isActive, setIsActive]=useState(false)
  const [isPasswd, setIsPasswrd] = useState(true)

 const inputHandler = (val:string) => {
   textChange(val);
   
 }; 
  return (
    <View style={style.outerContainer}>
      <Text style={style.LabelText}>{label}</Text>
      <View style={[style.passwrd, isActive ? style.root : {}]}>
        <View style = {[style.passwrd]}>
          <TextInput
            value={value}
            onChangeText={inputHandler}
            style={[
              style.LabelText,
              style.inputText,
              isActive ? style.Container : {},
              { flex: 7 },
            ]}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            secureTextEntry={isPasswrd && isPasswd}
            autoCapitalize='none'
            keyboardType={keyType ? keyType:'default'}
            placeholder={placeholder}
            textAlignVertical={textAlign}
            multiline={multiline}
          />
          {isPasswrd ? (
            <Pressable
              onPress={() => setIsPasswrd(!isPasswd)}
              style={{ flex: 1 }}
            >
              <Ionicons
                name={isPasswd ? "md-eye-off-outline" : "md-eye-outline"}
                size={24}
                color="black"
              />
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  root: {
    borderBottomWidth: 2,
    borderBottomColor: Color.Aqua500,
    marginBottom: 1,
  },
  LabelText: { color: "white", marginBottom: 4 },
  inputText: {
    backgroundColor: Color.White500,
    padding: 4,
    borderRadius: 5,
    color:Color.Black500
  },
  Container: {
    borderWidth: 2,
    borderColor: Color.White500,
    borderRadius: 5,
  },
  outerContainer: {
    padding: 8,
    width: "100%",
  },
  passwrd: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.White500,
    borderRadius:5
  },
});
import { useState } from "react";
import { View, StyleSheet, Button, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { signUserIn } from "../AppStore/Reducers/auth";
import { AppDispatch } from "../AppStore/store";
import { InputError } from "../components/UI/inputError";
import { InputText } from "../components/UI/text-input";
import { Color, GlobalStyle } from "../constent/color";

export const SignIn = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const [hasErr, setHseErr]=useState(false)
const dispatch = useDispatch<AppDispatch>()

const signIn= async()=>{
  await dispatch(signUserIn({email,password:passwrd}))
  navigation.navigate('Home')
}

  return (
    <View style={[GlobalStyle.RootScreenContainer, styles.outer]}>
      <View style={[styles.formWrapper]}>
        <View style={styles.outer}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <InputText label="Email address" value={email} textChange={setEmail} />
        <InputText
          label="Password"
          value={passwrd}
          textChange={setPasswrd}
          isPasswrd
        />
        {hasErr?<InputError errMessage="Wrong Cridentials. Please re-check." />:null}

        <View style={styles.submitBtn}>
          <Button title="Sign In" color={Color.Aqua500} onPress={signIn} />
        </View>
        <View style={[styles.outer, styles.textContainer]}>
          <Text style={styles.buttomText}>
            Don&apos;t have an account? &nbsp;
          </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={[styles.buttomText, styles.signUp]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical:24
  },
  formWrapper: {
    backgroundColor: Color.Black500,
    borderRadius:12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 8,
  },
  submitBtn: {
    width: 100,
    borderRadius: 5,
    overflow: "hidden",
    margin: 8,
  },
  title: {
    color: Color.Aqua500,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 16,
  },
  textContainer: { flexDirection: "row", marginBottom: 8, padding: 4 },
  buttomText: {
    color: Color.White500,
    fontSize: 12,
  },
  signUp: {
    textDecorationLine: "underline",
    textDecorationColor: Color.Aqua500,
    textAlign: "center",
    fontWeight: "bold",
    color: Color.Aqua500,
    fontSize: 14,
  },
});

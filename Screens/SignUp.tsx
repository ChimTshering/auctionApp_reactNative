import { updateProfile, User, UserCredential } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useDispatch } from "react-redux";
import { createUser, userBio } from "../AppStore/Reducers/userSlice";
import { AppDispatch } from "../AppStore/store";
import { InputError } from "../components/UI/inputError";
import { InputText } from "../components/UI/text-input";
import { Color, GlobalStyle } from "../constent/color";

export const SignUp = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const [cnfPasswrd, setCnfPasswrd] = useState("");
  const [hasErr, setHasErr] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const emailRegix = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const signUp = async () => {
    if (
      emailRegix.test(email) !== false &&
      passwrd.length &&
      passwrd === cnfPasswrd
      ) {
await dispatch(
  createUser({ email, password: passwrd }) 
);
await dispatch(
   userBio({ name, email, phone })
);  
    } else {
      setHasErr(true);
    }
  };
  useEffect(() => {
    setHasErr(false);
  }, [email, passwrd, cnfPasswrd]);
  return (
    <View style={[GlobalStyle.RootScreenContainer, styles.outer]}>
      <View style={[styles.formWrapper]}>
        <ScrollView>
          <SafeAreaView>
            <View style={styles.outer}>
              <Text style={styles.title}>Sign In</Text>
            </View>
            <InputText label="User Name" value={name} textChange={setName} />
            <InputText
              label="Phone Number"
              value={phone}
              textChange={setPhone}
              keyType="phone-pad"
            />
            <InputText
              label="Email address"
              value={email}
              textChange={setEmail}
              keyType="email-address"
            />
            <InputText
              label="Password"
              value={passwrd}
              textChange={setPasswrd}
              isPasswrd
            />
            <InputText
              label="Confirm Password"
              value={cnfPasswrd}
              textChange={setCnfPasswrd}
              isPasswrd
            />
            {hasErr ? (
              <InputError errMessage="Please re-check your input.." />
            ) : null}
            <View style={styles.submitBtn}>
              <Button
                title="Sign Up"
                color={Color.Aqua500}
                onPress={signUp}
              />
            </View>
            <View style={[styles.outer, styles.textContainer]}>
              <Text style={styles.buttomText}>
                Already have an account? &nbsp;
              </Text>
              <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text style={[styles.buttomText, styles.signUp]}>Sign In</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </ScrollView>
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
    borderRadius: 12,
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
    alignSelf:'center'
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

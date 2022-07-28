import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RegiForm() {
  const [isSecureTextEntry] = useState(true);
  const [name, getName] = useState("");
  const [nameErr, getNameErr] = useState("");

  const [email, getEmail] = useState("");
  const [emailErr, getEmailErr] = useState("");

  const [ph, getph] = useState("");
  const [phErr, getphErr] = useState("");

  const [pw, getpw] = useState("");
  const [pwErr, getPwErr] = useState("");

  const [pwComfirm, getpwComfirm] = useState("");
  const [pwComfirmErr, getpwComfirmErr] = useState("");

  function submit() {
    let NAME, MAIL, PH , PW, PWC;
    if (name.length == 0) {
      getNameErr(" ");

    } else {
      getNameErr("");
      NAME = true;
    }
    if (email.length == 0)
    {
      getEmailErr(" ");
    } else {
      getEmailErr("");
      MAIL = true;
    }
    if (ph.length == 0) {
      getphErr(" ");

    } else {
      getphErr("");
      PH = true;
    }
    if (pw.length == 0) {
      getPwErr(" ");

    } else {
      getPwErr("");
      PW = true;
    }
    if (pwComfirm.length == 0) {
      getpwComfirmErr(" ");

    } else {
      getpwComfirmErr("");
      PWC = true;
    }
    

  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 20 }}>
        Registration Form
      </Text>    
      <Text style={styles.head}> Full Name</Text>
      <TextInput
        style={styles.border}
        placeholder=" Full Name"
        onChangeText={text => getName(text)} />
      {nameErr.length > 0 &&
        < Text style={{ color: "red",  }}>Enter Full Name </Text>
       
      }
      
      

      <Text style={styles.head}>Email Address</Text>
      <TextInput style={styles.border}
        placeholder=" Email Address"
        onChangeText={text => getEmail(text)} />
      {emailErr.length > 0 &&
        < Text style={{ color: "red",  }}>Enter your email Address.</Text>
       
      }

      <Text style={styles.head}>Phone (enter only 10 digits number ) </Text>
      <TextInput
        style={styles.border}
        placeholder=" Phone Number"
        keyboardType="number-pad"
        onChangeText={text => getph(text)}
      />
      {phErr.length > 0 &&
        < Text style={{ color: "red",  }}>Enter a phone number.</Text>
       
      }

      <Text style={styles.head}>Password</Text>
      <TextInput
        style={styles.border}
        placeholder=" Password"
        secureTextEntry={isSecureTextEntry}
        onChangeText={text => getpw(text)}
      />
      {pwErr.length > 0 &&
        < Text style={{ color: "red", }}>Enter Password.</Text>
      } 
      
      
      <Text style={styles.head}>Confirm Password</Text>
      <TextInput
        style={styles.border}
        placeholder=" Confirm Password"
        secureTextEntry={isSecureTextEntry}
        onChangeText={text => getpwComfirm(text)}
      />
       {pwComfirmErr.length > 0 &&
        < Text style={{ color: "red", }}> Enter Password Confirmation.</Text>
      }

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={submit}>
        <Text> Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  border: {
    borderColor: "black",
    borderWidth: 1,
    height: 30,
  },
  head: {
    paddingBottom: 10,
    paddingTop: 20,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "lightblue",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Users from '../sevicer/Users';

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "   ") {
      return Alert.alert("Tai khoan khong duoc de trong");
    }

    if (password.trim() === "   ") {
      return Alert.alert("Mat khau khong duoc de trong");
    }

    if (username !== Users.username || password !== Users.password) {
      return Alert.alert("Tai khoan hoac mat khau khong dung");
    }

    navigation.navigate("Products");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.waper}>
        <Image
          source={require("../src/111.jpg")}
          style={styles.image}
        ></Image>
        <Text style={styles.username}>Đăng nhập tài khoản</Text>
        <TextInput
          style={[styles.input, styles.username]}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        <TouchableOpacity
          style={styles.btnLogin} 
          onPress={handleLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: 50,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  username: {
    marginBottom: 10,
    fontSize: 20,
  },
  image: {
    width: 300,
    resizeMode: "contain",
  },
  btnLogin: {
    width: 300,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#000",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 37,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;

import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "./src/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Kayıt başarılı"))
      .catch(e => alert(e.message));
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Giriş başarılı"))
      .catch(e => alert(e.message));
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Register" onPress={register} />
      <Button title="Login" onPress={login} />
    </View>
  );
}
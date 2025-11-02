import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { getUser } from '../utils/Database';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    getUser(email, password, users => {
      if (users.length > 0) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Login gagal!');
      }
    });
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
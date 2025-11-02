import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { insertUser } from '../utils/Database';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) return Alert.alert('Isi semua field!');
    insertUser(name, email, password, () => {
      Alert.alert('Registrasi berhasil!');
      navigation.navigate('Login');
    });
  };

  return (
    <View>
      <TextInput placeholder="Nama" onChangeText={setName} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
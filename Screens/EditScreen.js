import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { updateUser } from '../utils/Database';

export default function EditScreen({ route, navigation }) {
  const { user } = route.params;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    updateUser(user.id, name, email, () => {
      navigation.goBack();
    });
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} />
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function UserItem({ user, onEdit, onDelete }) {
  return (
    <View>
      <Text>{user.name} - {user.email}</Text>
      <Button title="Edit" onPress={onEdit} />
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
}
import React, { useEffect, useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import { getAllUsers, deleteUser } from '../utils/Database';
import UserItem from '../components/UserItem';

export default function HomeScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  const loadUsers = () => getAllUsers(setUsers);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadUsers);
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <UserItem
            user={item}
            onEdit={() => navigation.navigate('Edit', { user: item })}
            onDelete={() => {
              deleteUser(item.id, loadUsers);
            }}
          />
        )}
      />
    </View>
  );
}
import React, {useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { database } from './database/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Usuarios from './Usuarios'

const UsersList = () => {

  const [users, setUsers] = useState([])

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  useEffect(() =>{
    const collectionRef = collection(database, 'usuarios')
    const q = query(collectionRef, orderBy('name','desc'))

    const unsuscribe = onSnapshot (q, querySnapshot => {
      setUsers(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone
        }))
      )
    })
    return unsuscribe
  }, [])

  return (
    <View>
      <Text>UsersList</Text>
      {users.map(usuario => <Usuarios key={usuario.id} {...usuario} onDelete={handleDeleteUser}/>)}
    </View>
  )
}

export default UsersList
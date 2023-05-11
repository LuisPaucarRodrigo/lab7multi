import * as React from "react";
import * as RN from "react-native";
import { View, Text, StyleSheet} from "react-native";
import { database } from "./database/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default function Usuarios({
  id,email,name,phone, onDelete
}){

  const handleDelete = async () => {
    try {
      const userRef = doc(database, 'usuarios', id);
      await deleteDoc(userRef);
      onDelete(id);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <RN.View style={styles.tableRow}>
      <RN.Text style={styles.cell}>{id}</RN.Text>
      <RN.Text style={styles.cell}>{email}</RN.Text>
      <RN.Text style={styles.cell}>{name}</RN.Text>
      <RN.Text style={styles.cell}>{phone}</RN.Text>
      <RN.Button title="Eliminar" onPress={handleDelete} />
    </RN.View>
  )
}

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 16,
  },
});

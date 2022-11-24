import { Button, ScrollView, StyleSheet, TextInput, Text } from "react-native";
import React, { useEffect, useState } from 'react'; 



export default function AddDepartmentScreen({ navigation }) {
    const [name, setName] = useState("")

    const AddDepartment = async (name) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"Name":name})
        };
        await fetch ("http://192.168.0.4:3000/get_InsertDepartmentdata", requestOptions)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.goBack()}} title="Back">Back</Button>
            <Text>Type Department Name below</Text><TextInput onChangeText={(val,i) => { setName(val); console.log(val) }} value={name} />
            <Button onPress={async() => {await AddDepartment(name)}} title="submit">submit</Button>
        </ScrollView>
    )
   
   }


   const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
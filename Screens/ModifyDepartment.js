import { Button, ScrollView, StyleSheet, TextInput, Text } from "react-native";
import React, { useEffect, useState } from 'react'; 



export default function ModifyDepartmentScreen({ navigation }) {
    const [name, setName] = useState("")
    const [DepartmentID,setID] = useState("")
    const ModifyDepartment = async (name) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"DepartmentID":Number.parseInt(DepartmentID, 10), "Name":name})
        };
        await fetch ("http://192.168.0.4:3000/get_UpdateDepartmentdata", requestOptions)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.goBack()}} title="Go Back To Directory" color={"#941a1d"}>Back</Button>
            <Text>Type the Department ID you wish to change</Text><TextInput onChangeText={(val,i) => { setID(val); console.log(val) }} value={DepartmentID} />
            <Text>Type Department Name below</Text><TextInput onChangeText={(val,i) => { setName(val); console.log(val) }} value={name} />
            <Button onPress={async() => {await ModifyDepartment(name,DepartmentID)}} title="click to add change existing department"color={"#941a1d"}>submit</Button>
        </ScrollView>
    )
   
   }

   const styles = StyleSheet.create({
    scroll: {
      flexGrow: 1,
      scrollEnabled: true,
    },
    container: {
      flex: 1,
      backgroundColor: "#D9D9D9",
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      color: "#262626",
      fontSize: 30,
      fontWeight: "bold",
    },
    textInput: {
      height: 30,
      borderWidth: 1,
      borderRadius: 4,
      padding: 5,
    },
    smallText: {
      color: "#262626",
      fontSize: 12,
    },
  });
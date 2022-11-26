import { Button, ScrollView, StyleSheet, TextInput, Text } from "react-native";
import React, { useEffect, useState } from 'react'; 
import { SelectList } from "react-native-dropdown-select-list";



export default function ModifyDepartment({ navigation }) {
    const [newDepartmentName, setName] = useState("");
    const [departments, setDepartments] = useState([]);
    const [DepartmentID, setDepartmentID] = useState("");

    const ModifyDepartment = (newDepartmentName) => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'ID': DepartmentID, 'Name': newDepartmentName})
      };
      debugger;
     fetch ("http://192.168.0.4:3000/get_UpdateDepartmentdata", requestOptions)
     .then(r => r.json())
     .then(j => {debugger})
     .catch(e => alert(e.message))
  }
    useEffect(() => { 
        fetch("http://192.168.0.4:3000/get_departmentdata")
          .then(r => r.json())
          .then(json=>{ 
            let departments = json.map(item => {return {key:item.DepartmentID, value:item.Name };}); 
            setDepartments(departments); 
          }) 
      },[])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.goBack()}} title="Back">Back</Button>
            <Text>Select Department to update</Text>
            <SelectList setSelected={(val) => setDepartmentID(departments)}data={departments} save="key"/>
            <Text></Text>
            <Text>Type Department Name below</Text>
            <TextInput onChangeText={(val,i) => {setName(val); console.log(val)}} value={newDepartmentName} />
            <Button onPress={async() => {ModifyDepartment(newDepartmentName)}} title="submit">submit</Button>
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
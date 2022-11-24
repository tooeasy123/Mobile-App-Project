import { Button, ScrollView, StyleSheet,TextInput,Text } from "react-native";
import React, {useEffect,useState } from 'react';
import { SelectList } from "react-native-dropdown-select-list";

export default function AddStaffScreen({ navigation }) {

    
    //state
    const [Name, setName] = useState("")
    const [Phone, setPhoneNumber] = useState("")
    const [DepartmentID, setDepartmentID] = useState("")
    const [Suburb, setSuburb] = useState("")
    const [Address, setAddress] = useState("")
    const [State, setState] = useState("")
    const [Postcode, setPostcode] = useState("")
    const [Country, setCountry] = useState("")
    const [departments, setDepartments] = useState([]);
    //hooks
    useEffect(() => { 
      
      debugger;
      fetch("http://192.168.0.4:3000/get_departmentdata")
        .then(r => r.json())
        .then(json=>{ 
          debugger;
          let departments = json.map(item => {  return {key:item.DepartmentID, value:item.Name }; }); 
          setDepartments(departments); 
        });
        


    },[])

    const AddStaff = () => {

      let d1 = {Name,Phone,DepartmentID,Suburb,Address,State,Postcode,Country}; 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(d1)
        };

        debugger; 
        fetch ("http://192.168.0.4:3000/get_InsertPeopledata", requestOptions)
            .then(r => r.json())
            .then(j => {debugger})
            .catch(e => alert(e.message))
    };

      return (
          <ScrollView contentContainerStyle={styles.container}>
              <Button onPress={() => {navigation.goBack()}} title="Back">Back</Button>
              <Text>Type Name below </Text> 
              <TextInput placeholder = "Name" onChangeText={(val,i) => { setName(val); console.log(val)}} value={Name} />
              <Text>Type Phone Number below in text box</Text>
              <TextInput placeholder = "Phone" onChangeText={(val,i) => { setPhoneNumber(val); console.log(val) }} value={Phone} />
              <Text style={styles.smallText}>Department:</Text>
              <SelectList setSelected={(val) => setDepartmentID(val)}data={departments} save="key"/>
              <Text>Type Suburb below in text box</Text>
              <TextInput placeholder = "Suburb" onChangeText={(val,i) => {setSuburb(val); console.log(val) }} value={Suburb} />
              <Text>Type Address below in text box</Text>
              <TextInput placeholder = "Address" onChangeText={(val,i) => { setAddress(val) ; console.log(val) }} value={Address} />
              <Text>Type State below in text box</Text>
              <TextInput placeholder = "State" onChangeText={(val,i) => { setState(val); console.log(val) }} value={State} />
              <Text>Type PostCode below</Text>
              <TextInput placeholder = "Postcode" onChangeText={(val,i) => { setPostcode(val); console.log(val) }} value={Postcode} />
              <Text>Type Country below</Text>
              <TextInput placeholder = "Country"onChangeText={(val,i) => { setCountry(val); console.log(val) }} value={Country} />
              <Button onPress={AddStaff} title="submit">Submit New Employee/Staff Details</Button>
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
    })
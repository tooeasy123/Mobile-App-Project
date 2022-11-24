import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'; //imports library for usestate function
import { ScrollView, StyleSheet} from 'react-native';
import Department from './Department';

export default function App() { 
  const [bank, setBank1] = useState([]); //get and set function for variables used
  useEffect(() => //react renders pages everytime, usestate lets react see the state of the the variable for the react
{
	fetch("http://192.168.0.4:3000/get_departmentdata")
	.then(async (res) => 
		{
		  setBank1(await res.json())
		})
}, [])

  return (
    <ScrollView contentContainerStyle ={styles.container}>
      {bank.map((val,i)=> {return <Department department = {val} key = {i}/>})}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
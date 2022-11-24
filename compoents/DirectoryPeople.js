import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'; //imports library for usestate function
import { ScrollView, StyleSheet, Text} from 'react-native';
import People from './People';

export default function App() { 
  const [bank, setBank] = useState([]); //get and set function for variables used
  useEffect(() => //react renders pages everytime, usestate lets react see the state of the the variable for the react
{
	fetch("http://192.168.0.4:3000/get_peopledata")
	.then(async (res) => 
		{
		  setBank(await res.json())
		})
}, [])

  return (
    <ScrollView contentContainerStyle ={styles.container}>
      {bank.map((val,i)=> {return <People person = {val} key = {i}/>})}
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

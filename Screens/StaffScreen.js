import { Button, ScrollView, StyleSheet } from "react-native";
import Directory from "../compoents/DirectoryPeople";


export default function StaffScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.goBack()}} title="Back">Back</Button>
            <Directory/>
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
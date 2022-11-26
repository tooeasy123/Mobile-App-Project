import { Button, ScrollView, StyleSheet } from "react-native";


export default function StaffScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.goBack()}} title="Back">Back</Button>
            <Button onPress={() => {navigation.navigate('ViewAllStaff')}} title="ViewAllStaff">Add New Department Information</Button>
            <Button onPress={() => {navigation.navigate('ViewSingleStaff')}} title="ViewSingleStaff">Add New Department Information</Button>
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
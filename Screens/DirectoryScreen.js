import { Button, ScrollView, StyleSheet } from "react-native";



export default function DirectoryScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.navigate('DepartmentScreen')}} title="DepartmentScreen">View Department Information</Button>
            <Button onPress={() => {navigation.navigate('StaffScreen')}} title="StaffScreen">View Staff Information</Button>
            <Button onPress={() => {navigation.navigate('AddStaffScreen')}} title="AddStaffScreen">Add new Employee/Staff Information</Button>
            <Button onPress={() => {navigation.navigate('ModifyDepartment')}} title="ModifyDepartment">Update Department Details</Button>
            <Button onPress={() => {navigation.navigate('ModifyPeople')}} title="ModifyPeople">Update Staff Details</Button>
            <Button onPress={() => {navigation.navigate('AddDepartmentScreen')}} title="AddDepartmentScreen">Add New Department Information</Button>
            <Button onPress={() => {navigation.goBack()}} title="Back">Back</Button>
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

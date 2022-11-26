import { Button, ScrollView, StyleSheet,View,Text } from "react-native";



export default function DirectoryScreen({ navigation }) {
    return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.titleContainer}>
    <Text style={styles.titleText}>ROI Staff Directory</Text>
    </View>
    <Button onPress={() => {navigation.navigate('DepartmentScreen')}} title="DepartmentScreen"color={"#941a1d"}>View Department Information</Button>
    <Button onPress={() => {navigation.navigate('StaffScreen')}} title="StaffScreen"color={"#941a1d"}>View Staff Information</Button>
    <Button onPress={() => {navigation.navigate('AddStaffScreen')}} title="AddStaffScreen"color={"#941a1d"}>Add new Employee/Staff Information</Button>
    <Button onPress={() => {navigation.navigate('ModifyDepartment')}} title="ModifyDepartment"color={"#941a1d"}>Update Department Details</Button>
    <Button onPress={() => {navigation.navigate('ModifyPeople')}} title="ModifyPeople"color={"#941a1d"}>Update Staff Details</Button>
    <Button onPress={() => {navigation.navigate('AddDepartmentScreen')}} title="AddDepartmentScreen"color={"#941a1d"}>Add New Department Information</Button>
    <Button onPress={() => {navigation.goBack()}} title="Back"color={"#941a1d"}>Back</Button>
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

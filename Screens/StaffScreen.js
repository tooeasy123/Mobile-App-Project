import { Button, ScrollView, StyleSheet } from "react-native";


export default function StaffScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.goBack()}} title="Go back to directory" color={"#941a1d"}>Back</Button>
            <Button onPress={() => {navigation.navigate('ViewAllStaff')}} title="View All Staff Profiles" color={"#941a1d"}>Add New Department Information</Button>
            <Button onPress={() => {navigation.navigate('ViewSingleStaff')}} title="View a Single Staff Profile" color={"#941a1d"}>Add New Department Information</Button>
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
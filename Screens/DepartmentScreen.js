import { Button, ScrollView, StyleSheet } from "react-native";
import Directory from "../compoents/DirectoryDepartment";


export default function DepartmentScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => {navigation.goBack()}} title="Back">Back</Button>
            <Directory/>
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
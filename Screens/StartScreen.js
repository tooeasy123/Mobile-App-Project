import { StyleSheet, Button, View, TextInput, Text } from "react-native";


export default function StartScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
    <Text style={styles.titleText}>ROI HR Management System</Text>
    </View>
            <Button onPress={() => {navigation.navigate('DirectoryScreen')}} title="To HR System Directory"color={"#941a1d"}>To Directory</Button>
        </View>
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





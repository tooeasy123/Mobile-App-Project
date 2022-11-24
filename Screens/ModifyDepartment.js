import { Button, ScrollView, StyleSheet } from "react-native";



export default function ModifyDepartment({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
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
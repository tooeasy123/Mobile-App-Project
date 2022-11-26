import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function People({person}) {
  return (
    <View style={styles.container}>
        <Text>PersonID: {person['PersonID']}</Text>
        <Text>Name: {person['Name']}</Text>
        <Text>Phone: {person['Phone']}</Text>
        <Text>DepartmentID: {person['DepartmentID']}</Text>
        <Text>Suburb: {person['Suburb']}</Text>
        <Text>Address: {person['Address']}</Text>
        <Text>State: {person['State']}</Text>
        <Text>PostCode: {person['Postcode']}</Text>
        <Text>Country: {person['Country']}</Text>
    </View>
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

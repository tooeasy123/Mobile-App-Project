import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function People({person}) {
  return (
    <View style={styles.container}>
        <Text>{person['PersonID']}</Text>
        <Text>{person['Name']}</Text>
        <Text>{person['Phone']}</Text>
        <Text>{person['DepartmentID']}</Text>
        <Text>{person['Suburb']}</Text>
        <Text>{person['Address']}</Text>
        <Text>{person['State']}</Text>
        <Text>{person['Postcode']}</Text>
        <Text>{person['Country']}</Text>
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

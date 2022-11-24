import { StyleSheet, Button, View, TextInput, Text } from "react-native";


export default function StartScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>StartupScreen Title</Text>
            <Button onPress={() => {navigation.navigate('DirectoryScreen')}} title="DirectoryScreen">To Directory</Button>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});





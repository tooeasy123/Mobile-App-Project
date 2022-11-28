import * as React from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

export function InspectEmployee({ navigation }) {
  //takes employee json object passed to it and stores it as a constant
  const route = useRoute();
  const employeeDetails = route.params.array;

  return (
    //creates list of text fields displaying employee details
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.titleText}>ROI Staff Member Details</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.normalText}>Name: {employeeDetails["Name"]}</Text>
          <Text style={styles.normalText}>
            Department: {employeeDetails["Department"]}
          </Text>
          <Text style={styles.normalText}>
            Phone Number: {employeeDetails["Phone"]}
          </Text>
          <Text style={styles.normalText}>
            Street Address: {employeeDetails["Street"]}
          </Text>
          <Text style={styles.normalText}>City: {employeeDetails["City"]}</Text>
          <Text style={styles.normalText}>
            State: {employeeDetails["State"]}
          </Text>
          <Text style={styles.normalText}>
            Postcode: {employeeDetails["ZIP"]}
          </Text>
          <Text style={styles.normalText}>
            Country: {employeeDetails["Country"]}
          </Text>
          <Button onPress={() => {navigation.goBack()}} title="Back to view individual profiles"color={"#941a1d"}>Back</Button>
        </View>
      </View>
    </ScrollView>
  );
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

  detailsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    color: "#262626",
    fontSize: 30,
    fontWeight: "bold",
  },

  normalText: {
    color: "#262626",
    fontSize: 16,
  },
});
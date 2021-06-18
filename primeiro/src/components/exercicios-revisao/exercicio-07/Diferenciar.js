import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default (props) => {
	if (Platform.OS == "android") {
		return <Text>Android</Text>;
	} else if (Platform.OS == "ios") {
		return <Text>iOS</Text>;
	} else {
		return <Text>Nem android Nem iOS</Text>;
	}
};

const styles = StyleSheet.create({
	container: {},
});

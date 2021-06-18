import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<>
			<Text>{props.a}</Text>
			<Text>{props.b}</Text>
		</>
	);
};

const styles = StyleSheet.create({
	container: {},
});

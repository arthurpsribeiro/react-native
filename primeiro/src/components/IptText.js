import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label} placeholder={props.placeholder}>
				{props.label}:
			</Text>
			<TextInput style={styles.input} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: { margin: 10 },
	label: { fontSize: 20, fontWeight: "bold", color: "#615b5a" },
	input: {
		backgroundColor: "#eee",
		height: 40,
	},
});

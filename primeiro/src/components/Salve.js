import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.texto}>salve galera </Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.texto}>bons estudos </Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.s2}>s2</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	texto: {
		textTransform: "uppercase",
		fontSize: 30,
		margin: 10,
	},
	s2: {
		color: "tomato",
		fontSize: 30,
		// margin: 10,
	},
});

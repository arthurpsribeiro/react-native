import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default (props) => {
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.tituloPrincipal}>{props.title}</Text>
				<Text style={styles.subtitle}>{props.subtitle}</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	tituloPrincipal: {
		fontWeight: "bold",
		fontSize: 25,
		textTransform: "uppercase",
		letterSpacing: 1,
		textAlign: "center",
	},
	subtitle: {
		fontSize: 20,
		textAlign: "center",
		textTransform: "lowercase",
	},
	container: {},
});

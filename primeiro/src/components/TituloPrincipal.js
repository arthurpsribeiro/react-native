import React from "react";
import { Text, StyleSheet } from "react-native";

export default () => {
	return <Text style={styles.tituloPrincipal}>Título Principal</Text>;
};

const styles = StyleSheet.create({
	tituloPrincipal: {
		fontWeight: "bold",
		fontSize: 40,
		color: "#fff",
		backgroundColor: "#b74",
		textAlign: "center",
	},
});

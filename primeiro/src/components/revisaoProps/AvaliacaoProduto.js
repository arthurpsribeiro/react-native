import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>{props.titulo}</Text>
			<Text>{props.conteudo}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#eee",
		padding: 10,
	},
	titulo: {
		color: "#000",
		fontWeight: "bold",
		marginBottom: 2,
	},
});

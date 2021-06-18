import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<>
			<Text style={styles.titulo}>{props.titulo}</Text>
			<Text style={styles.subtitulo}>{props.subtitulo}</Text>
		</>
	);
};

const styles = StyleSheet.create({
	titulo: {
		fontSize: 20,
		fontWeight: "bold",
	},
	subtitulo: {
		fontSize: 16,
		color: "#cecece",
	},
});

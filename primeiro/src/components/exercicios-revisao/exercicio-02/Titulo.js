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
		fontSize: 16,
		fontWeight: "bold",
	},
	subtitulo: {
		fontSize: 12,
		color: "#cecece",
	},
});

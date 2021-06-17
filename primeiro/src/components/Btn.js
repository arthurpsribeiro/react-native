import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
	return (
		<TouchableOpacity>
			<Text style={[styles.btnComprar, { backgroundColor: props.back }]}>
				{props.titulo || "Arthur"}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btnComprar: {
		backgroundColor: "#29e45e",
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
		padding: 20,
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: 1,
	},
});

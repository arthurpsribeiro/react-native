import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<>
			<Text>[Inicio] Membros da Família:</Text>
			{props.children}
			<Text>[Fim] Membros da Família.</Text>
		</>
	);
};

const styles = StyleSheet.create({
	container: {},
});

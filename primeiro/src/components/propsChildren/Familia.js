import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text>Inicio Membros da Familia</Text>
			{props.children}
			<Text>Fim Membros da Familia</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default (props) => {
	const [numero, setNumero] = useState(props.inicial);

	function incremento() {
		setNumero(numero + props.passo);
	}

	function decremento() {
		setNumero(numero - props.passo);
	}

	return (
		<View style={styles.container}>
			<Button title="-" onPress={decremento} />
			<Text>{numero}</Text>
			<Button title="+" onPress={incremento} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "20%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

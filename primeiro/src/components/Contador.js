import React, { useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";

export default (props) => {
	const estoque = 10;
	const [numero, setNumero] = useState(props.inicial);
	// const [qtd, setQtd] = useState(0) sem usar props, a logica abaixo é a mesma

	function aumentar() {
		if (numero < 10) {
			setNumero(numero + 1);
		}
	}

	function diminuir() {
		if (numero > 0) {
			setNumero(numero - 1);
		}
	}

	return (
		<>
			<View style={styles.container}>
				<Button title="-" onPress={diminuir} />
				<Text style={styles.text}>{numero}</Text>
				<Button title="+" onPress={aumentar} />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		textAlign: "center",
		paddingRight: 10,
		paddingLeft: 10,
	},
	container: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "center",
	},
});

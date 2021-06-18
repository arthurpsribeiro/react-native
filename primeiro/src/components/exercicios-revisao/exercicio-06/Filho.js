import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default (props) => {
	function gerarNumero() {
		return Math.random();
	}
	return (
		<Button
			title="Executar"
			onPress={() => props.funcao(gerarNumero(), "O valor é:")}
		/>
	);
};

const styles = StyleSheet.create({
	container: {},
});

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default (props) => {
	function gerarNumero() {
		return Math.random();
	}

	return (
		<View style={styles.container}>
			<Button
				title="Executar"
				onPress={() => {
					//const novoNumero = gerarNumero(); //armazena o retorno de uma função em uma constante
					props.funcao("O valor é: ", gerarNumero()); // passando dados para uma funcao q esta no pai
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

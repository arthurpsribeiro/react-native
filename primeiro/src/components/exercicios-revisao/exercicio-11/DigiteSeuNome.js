import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Titulo from "../exercicio-02/Titulo";

export default (props) => {
	const [nome, setNome] = useState("");

	return (
		<View style={styles.container}>
			<Titulo titulo={`Nome: ${nome} `} />
			<TextInput
				placeholder="Digite seu nome"
				value={nome}
				onChangeText={(nome) => setNome(nome)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	txtG: {
		fontSize: 24,
	},
});

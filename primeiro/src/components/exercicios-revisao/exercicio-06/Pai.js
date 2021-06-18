import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Filho from "../exercicio-06/Filho";

export default (props) => {
	const [texto, setTexto] = useState("");
	const [numero, setNumero] = useState("0");

	function exibirValor(numero, texto) {
		setNumero(numero);
		setTexto(texto);
	}
	return (
		<>
			<Text>
				{texto}
				{numero}
			</Text>
			<Filho funcao={exibirValor} />
		</>
	);
};

const styles = StyleSheet.create({
	container: {},
});

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Filho from "./Filho";

export default (props) => {
	const [texto, setTexto] = useState(""); //definido o estado inicial de Texto
	const [num, setNum] = useState(0); //definindo o estado inicial de Num

	function exibirValor(texto, num) {
		setTexto(texto);
		setNum(num);
	}

	return (
		<View style={styles.container}>
			<Text>
				{texto}
				{num}
			</Text>
			<Filho funcao={exibirValor} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

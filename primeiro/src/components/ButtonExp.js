import React from "react";
import { Button } from "react-native";

export default () => {
	function cadastrar() {
		console.warn("cadastrou");
	}

	function logar() {
		console.warn("logou");
	}

	return (
		<>
			<Button title="cadastrar" onPress={cadastrar} />
			<Button title="logar" onPress={() => console.warn("logou")} />
		</>
	);
};

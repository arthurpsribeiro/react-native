import React from "react";
import { Button, TextInput } from "react-native";
import ButtonProps from "../components/ButtonProps";

function cadastrar() {
	console.warn("cadastrou");
}

function logar() {
	console.warn("logou");
}

export default () => {
	return (
		<>
			<TextInput placeholder="digite seu email" />
			<TextInput placeholder="digite sua senha" />
			<ButtonProps titulo="Logar" funcao={logar} />
			<ButtonProps titulo="Cadastrar" funcao={cadastrar} />
		</>
	);
};

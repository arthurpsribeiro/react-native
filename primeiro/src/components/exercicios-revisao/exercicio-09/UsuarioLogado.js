import React from "react";
import { View, Text, StyleSheet } from "react-native";
import If from "./If";

export default (props) => {
	const usuario = props.usuario || {};
	return (
		<>
			<If teste={usuario && usuario.nome && usuario.email}>
				<Text>Usuário Logado:</Text>
				<Text>
					{usuario.nome} - {usuario.email}
				</Text>
			</If>
		</>
	);
};

const styles = StyleSheet.create({
	container: {},
});

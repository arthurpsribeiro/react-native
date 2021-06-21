import React from "react";
import { View, Text, StyleSheet } from "react-native";
import produtos from "./responses/respProduto";

export default (props) => {
	function obterLista() {
		return produtos.map((p) => {
			return (
				<Text key={p.id}>
					{p.id} {p.nome} R${p.preco}
				</Text>
			);
		});
	}

	return (
		<View style={styles.container}>
			<Text>Lista de Produtos</Text>
			{obterLista()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

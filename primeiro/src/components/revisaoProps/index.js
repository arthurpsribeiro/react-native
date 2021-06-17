import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AvaliacaoProduto from "./AvaliacaoProduto";

export default (props) => {
	return (
		<>
			<View style={styles.container}>
				<AvaliacaoProduto
					titulo="Produto Excelente."
					conteudo="produto top, recomendo"
				/>
			</View>
			<View style={styles.container}>
				<AvaliacaoProduto
					titulo="Produto Bom!"
					conteudo="produto bom, poderia ser melhor mas eh bom"
				/>
			</View>
			<View style={styles.container}>
				<AvaliacaoProduto
					titulo="Produto Péssimo."
					conteudo="produto ruim, n recomendo"
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 1,
	},
});

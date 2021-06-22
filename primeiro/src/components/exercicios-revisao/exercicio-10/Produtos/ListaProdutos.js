import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import produtos from "./produtosResponse";
import Titulo from "../../exercicio-02/Titulo";

export default (props) => {
	function obterLista() {
		return produtos.map((produto) => {
			return (
				<>
					<Image style={styles.img} source={produto.imgUrl} />
					<Text>
						{produto.id} {produto.nome} {produto.preco}
					</Text>
				</>
			);
		});
	}
	return (
		<View style={styles.container}>
			<Titulo titulo="Lista de Produtos" />
			{obterLista()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	img: {
		height: 100,
		width: 100,
	},
});

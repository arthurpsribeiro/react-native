import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import produtos from "./produtosResponse";
import Titulo from "../../exercicio-02/Titulo";

export default (props) => {
	const produtoRender = ({ item: produto }) => {
		return (
			<>
				<Image style={styles.img} source={produto.imgUrl} />
				<Text>
					{produto.id} {produto.nome} {produto.preco}
				</Text>
			</>
		);
	};
	return (
		<>
			<Titulo titulo="FlatList de Produtos" />
			<FlatList
				data={produtos}
				keyExtractor={(produto) => `${produto.id}`}
				renderItem={produtoRender}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {},
	img: {
		height: 100,
		width: 100,
	},
});

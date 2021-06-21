import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import respProdutosHome from "./responses/respProdutosHome";
import ProdutoHome from "./ProdutoHome";

export default (props) => {
	const produtoRender = ({ item }) => {
		return (
			<ProdutoHome
				imgUrl={item.imgUrl}
				nome={item.nome}
				marca={item.marca}
				preco={item.preco}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<Text>Lista de Produtos FlatList</Text>
			<FlatList
				data={respProdutosHome}
				keyExtractor={(item) => `${item.id}`}
				renderItem={produtoRender}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

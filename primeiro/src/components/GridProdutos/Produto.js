import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ButtonProps from "../ButtonProps";

export default (props) => {
	function mostraPreco(promocao) {
		return promocao ? (
			<>
				<Text style={styles.precoAntigo}>{`De: R$ ${props.precoAntigo}`}</Text>
				<Text style={styles.preco}>{`Por: R$ ${props.preco}`}</Text>
			</>
		) : (
			<>
				<Text style={styles.preco}>{`Preço: R$ ${props.preco}`}</Text>
			</>
		);
	}

	function adicionarAoCarrinho() {
		console.warn("adicionou");
	}

	return (
		<TouchableOpacity style={styles.container}>
			<Image source={props.imagem} style={styles.img} />
			<Text style={styles.nome}>{props.nome}</Text>
			<Text style={styles.marca}>{props.marca}</Text>
			{mostraPreco(props.promocao)}
			<ButtonProps titulo="Comprar" funcao={adicionarAoCarrinho} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		margin: 10,
		width: "40%",
		alignItems: "center",
		justifyContent: "space-between",
	},
	nome: {
		fontSize: 20,
		fontWeight: "bold",
	},
	marca: {
		fontSize: 16,
		color: "tomato",
	},
	precoAntigo: {
		color: "#aaa",
		textDecorationStyle: "solid",
		textDecorationLine: "line-through",
	},
	preco: {
		fontSize: 16,
		fontWeight: "bold",
	},
	img: {
		width: 100,
		height: 100,
		marginBottom: 20,
	},
});

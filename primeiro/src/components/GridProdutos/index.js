import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Produto from "./Produto";
import imgProduto1 from "../../../assets/imgs/caneta.jpeg";
import imgProduto2 from "../../../assets/imgs/lapis.jpeg";
import TituloPrincipal from "../TituloPrincipal";

export default (props) => {
	return (
		<View style={styles.container}>
			<TituloPrincipal
				title="Melhores ofertas"
				subtitle="Você encontra aqui!"
			/>
			<Produto
				imagem={imgProduto1}
				nome="Caneta"
				marca="Bic"
				precoAntigo="5,00"
				preco="2,00"
				promocao={false}
			/>
			<Produto
				imagem={imgProduto2}
				nome="Lápis"
				marca="Faber Castel"
				precoAntigo="10,00"
				preco="6,00"
				promocao={true}
			/>
			<Produto
				imagem={imgProduto2}
				nome="Lápis"
				marca="Faber Castel"
				precoAntigo="10,00"
				preco="6,00"
				promocao={true}
			/>
			<Produto
				imagem={imgProduto1}
				nome="Caneta"
				marca="Bic"
				precoAntigo="5,00"
				preco="2,00"
				promocao={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
	},
});

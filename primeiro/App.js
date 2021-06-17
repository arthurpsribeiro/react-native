import React from "react";
import {
	Text,
	StyleSheet,
	View,
	SafeAreaView,
	Button,
	TouchableOpacity,
} from "react-native";
// import Primeiro from "./src/components/Primeiro";
// import CompPadrao, { Component1, Component2 } from "./src/components/Multi";
// import Btn from "./src/components/Btn";
// import TituloPrincipal from "./src/components/TituloPrincipal";
import Header from "./src/components/Header";
// import MinMax from "./src/components/MinMax";
// import ButtonExp from "./src/components/ButtonExp";
// import Login from "./src/screens/Login";
// import Contador from "./src/components/Contador";
// import Pai from "./src/components/direta/Pai";
// import GridProdutos from "./src/components/GridProdutos/";
// import RevisaoProps from "./src/components/revisaoProps";
// import Pai from "./src/components/indireta/Pai";
// import Diferenciar from "./src/components/Diferenciar";
import Familia from "./src/components/propsChildren/Familia";
import Membro from "./src/components/propsChildren/Membro";
import ParImpar from "./src/components/condicional/ParImpar";

export default () => {
	return (
		<SafeAreaView>
			<Header />
			<ParImpar num={2} />
			<ParImpar num={5} />
			<ParImpar num={6} />
			<ParImpar num={13} />

			{/* <Login />
			<Familia>
				<Membro nome="Arthur" sobrenome="Ribeiro" />
				<Membro nome="Melina" sobrenome="Ribeiro" />
			</Familia>
			<Familia>
				<Membro nome="José" sobrenome="Ribeiro" />
				<Membro nome="Maria" sobrenome="Ribeiro" />
			</Familia>
			<Diferenciar />
			<Pai />
			<RevisaoProps />
			<GridProdutos />
			<Pai />
			<Contador inicial={0} />
			<Header />
			<ButtonExp />
			<MinMax min="2" max="10" /> Strings
			<MinMax min={5} max={15} /> Numeros
			<TituloPrincipal title="Home" subtitle="Seja Bem Vindo" />
			<Btn titulo="Add to Cart" back="#29e45e" />
			<Btn titulo="Comprar" back="#29e45e" />
			<Btn titulo="Finalizar Compra" back="#29e45e" />
			<Btn titulo="Cadastrar" back="#cecece" />
			<View style={style.App}>
				<Text style={[style.txtG, style.txtBranco]}>Iniciando com estilos</Text>
			</View> */}
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	// App: {
	// 	flex: 1,
	// 	backgroundColor: "#A00",
	// },
	// txtG: {
	// 	fontSize: 30,
	// },
	// txtBranco: {
	// 	color: "#fff",
	// },
});

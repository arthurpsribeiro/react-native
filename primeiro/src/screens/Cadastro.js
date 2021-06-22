import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IptText from "../components/IptText";
import TituloPrincipal from "../components/TituloPrincipal";
import Btn from "../components/Btn";

export default (props) => {
	return (
		<View style={styles.container}>
			<TituloPrincipal title="Faça seu Cadastro" />
			<IptText label="Nome:" />
			<IptText label="Email:" />
			<IptText label="Endereço:" />
			<IptText label="Telefone:" />
			<IptText label="Senha:" />
			<IptText label="Confirme sua senha:" />
			<Btn title="Cadastrar" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

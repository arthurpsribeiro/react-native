import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IptText from "../components/IptText";
import TituloPrincipal from "../components/TituloPrincipal";
import Btn from "../components/Btn";

export default (props) => {
	return (
		<View style={styles.container}>
			<TituloPrincipal title="Faça seu Login" />
			<IptText label="Email" />
			<IptText label="Senha" />
			<Btn title="Entrar" />
			<TituloPrincipal subtitle="não possui cadastro ?" />
			<Btn title="Cadastre-se" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

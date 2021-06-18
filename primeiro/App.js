import React from "react";
import {
	Text,
	StyleSheet,
	View,
	SafeAreaView,
	Button,
	TouchableOpacity,
} from "react-native";

import MinMax from "./src/components/exercicios-revisao/exercicio-01/MinMax";
import Titulo from "./src/components/exercicios-revisao/exercicio-02/Titulo";
import Botao from "./src/components/exercicios-revisao/exercicio-03/Botao";
import Contador from "./src/components/exercicios-revisao/exercicio-04/Contador";
import PaiDireto from "./src/components/exercicios-revisao/exercicio-05/Pai";
import PaiIndireto from "./src/components/exercicios-revisao/exercicio-06/Pai";
import Diferenciar from "./src/components/exercicios-revisao/exercicio-07/Diferenciar";
import Familia from "./src/components/exercicios-revisao/exercicio-08/Familia";
import Membro from "./src/components/exercicios-revisao/exercicio-08/Membro";
import ParImpar from "./src/components/exercicios-revisao/exercicio-09/ParImpar";
import UsuarioLogado from "./src/components/exercicios-revisao/exercicio-09/UsuarioLogado";

export default () => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 01</Text>
				<MinMax min={10} max={20} />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 02</Text>
				<Titulo titulo="Eu Sou o título." subtitulo="Eu sou o subtitulo." />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 03</Text>
				<Botao />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 04</Text>
				<Contador inicial={0} passo={10} />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 05</Text>
				<PaiDireto />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 06</Text>
				<PaiIndireto />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 07</Text>
				<Diferenciar />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 08</Text>
				<Familia>
					<Membro nome="Arthur" sobrenom="Riberio" />
					<Membro nome="Melina" sobrenom="Riberio" />
				</Familia>
				<Familia>
					<Membro nome="José" sobrenom="Riberio" />
					<Membro nome="Maria" sobrenom="Riberio" />
				</Familia>
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 09</Text>
				<ParImpar num={3} />
				<ParImpar num={2} />
			</View>
			<View style={styles.container}>
				<Text style={styles.titulo}>Exercício 09.2</Text>
				<UsuarioLogado
					usuario={{ nome: "Arthur", email: "arthur@gmail.com" }}
				/>
				<UsuarioLogado usuario={{ nome: "Arthur" }} />
				<UsuarioLogado usuario={{ email: "arthur@gmail.com" }} />
				<UsuarioLogado usuario={{}} />
				<UsuarioLogado usuario={null} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderWidth: 2,
		borderColor: "#20232a",
	},
	titulo: {
		marginBottom: 5,
		fontSize: 16,
		fontWeight: "bold",
	},
});

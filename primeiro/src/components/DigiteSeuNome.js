import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default (props) => {
	let postCadastroObj = {
		nome: "",
		email: "",
		senha: "",
	};

	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	function postCadastro() {
		postCadastroObj.nome = nome;
		postCadastroObj.email = email;
		postCadastroObj.senha = senha;

		console.warn(postCadastroObj);
	}

	return (
		<View style={styles.container}>
			<Text>{nome}</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu nome"
				value={nome}
				onChangeText={(nome) => setNome(nome)}
			/>
			<Text>{email}</Text>

			<TextInput
				style={styles.input}
				placeholder="Digite seu e-mail"
				value={email}
				onChangeText={(email) => setEmail(email)}
			/>
			<Text>{senha}</Text>

			<TextInput
				style={styles.input}
				placeholder="Digite sua senha"
				value={senha}
				secureTextEntry={true}
				onChangeText={(senha) => setSenha(senha)}
			/>
			<Button title="cadastrar" onPress={() => postCadastro()} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	input: { backgroundColor: "#aaa", padding: 20, margin: 5 },
});

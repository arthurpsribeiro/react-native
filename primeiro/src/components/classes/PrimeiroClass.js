import React, { Component } from "react";
import { Text, Button } from "react-native";

export default class Primeiro extends Component {
	param = "param da classe";

	state = {
		texto: this.props.texto,
		numero: 10,
	};

	mudarEstado() {
		this.setState({ texto: "novo valor", numero: 5 });
	}

	teste(param) {
		return (
			<>
				<Text>{param}</Text>
				<Text>{this.param}</Text>
				<Text>{this.state.texto}</Text>
				<Text>{this.state.numero}</Text>
			</>
		);
	}
	render() {
		return (
			<>
				<Button title="alterar estado" onPress={() => this.mudarEstado()} />
				{this.teste("param da funcao")}
			</>
		);
	}
}

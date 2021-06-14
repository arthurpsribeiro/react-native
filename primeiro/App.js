import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import Primeiro from "./src/components/Primeiro";
import CompPadrao, { Component1, Component2 } from "./src/components/Multi";

const App = () => {
	return (
		<SafeAreaView style={style.App}>
			<View>
				<Primeiro />
				<CompPadrao />
				<Component1 />
				<Component2 />
				<Text style={[style.txtG, style.txtBranco]}>TExtoooooo</Text>
			</View>
		</SafeAreaView>
	);
};

export default App;

const style = StyleSheet.create({
	App: {
		backgroundColor: "#A00",
		flex: 1,
	},
	txtG: {
		fontSize: 30,
		backgroundColor: "#B88",
	},
	txtBranco: {
		color: "#fff",
	},
});

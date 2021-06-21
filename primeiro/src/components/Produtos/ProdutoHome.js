import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Image source={props.imgUrl} style={styles.image} />
			<Text>{props.nome}</Text>
			<Text>{props.marca}</Text>
			<Text>{props.preco}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	image: {
		width: 100,
		height: 100,
	},
});

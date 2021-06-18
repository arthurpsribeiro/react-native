import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	console.warn(props);
	console.warn(props.min);
	console.warn(props.max);

	return (
		<Text>
			O valor {props.min} é menor que o valor {props.max}
		</Text>
	);
};

const styles = StyleSheet.create({
	container: {},
});

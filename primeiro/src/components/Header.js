import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Icon name="bars" size={40} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Icon name="google" size={40} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Icon name="shopping-cart" size={40} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 20,
		justifyContent: "space-between",
		borderBottomWidth: 5,
		// borderBottomStyle: "solid",
		borderBottomColor: "#000",
	},
});

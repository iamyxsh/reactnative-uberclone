import React from "react"
import { StyleSheet, View, Image } from "react-native"
import tw from "tailwind-react-native-classnames"
import NavigationOptions from "./components/NavigationOptions.component.home"

const HomeScreen = () => {
	return (
		<View style={tw`p-5`}>
			<Image
				style={styles.uberLogo}
				source={{
					uri: "https://links.papareact.com/gzs",
				}}
			/>
			<NavigationOptions />
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	uberLogo: {
		width: 100,
		height: 100,
		resizeMode: "contain",
	},
})

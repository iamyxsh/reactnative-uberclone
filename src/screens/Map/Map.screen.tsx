import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface Props {}

const MapScreen = (props: Props) => {
	return (
		<SafeAreaView>
			<View>
				<Text>Map Screen</Text>
			</View>
		</SafeAreaView>
	)
}

export default MapScreen

const styles = StyleSheet.create({})

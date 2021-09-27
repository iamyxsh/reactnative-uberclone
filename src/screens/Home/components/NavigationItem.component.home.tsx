import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { Icon } from "react-native-elements/dist/icons/Icon"
import tw from "tailwind-react-native-classnames"
import {
	IconNameEnums,
	IconTypeEnums,
} from "../../../configs/enums/styles.enums"
import { RootStackParamList } from "../../../types/navigation"

interface Props {
	data: {
		title: string
		image: string
		screen: keyof RootStackParamList
	}
}

const NavigationItem = ({ data: { title, image, screen } }: Props) => {
	const nav = useNavigation<StackNavigationProp<RootStackParamList>>()

	return (
		<TouchableOpacity
			onPress={() => nav.navigate(screen)}
			style={tw`px-4 py-4 mx-4 bg-gray-200 w-40`}
		>
			<Image
				style={styles.optionLogo}
				source={{
					uri: image,
				}}
			/>
			<Text style={tw`mt-2 text-lg font-semibold text-center`}>{title}</Text>
			<Icon
				type={IconTypeEnums.ant}
				name={IconNameEnums.arrowRight}
				color="white"
				style={tw`py-2 bg-black rounded-full w-10 mx-auto mt-3`}
			/>
		</TouchableOpacity>
	)
}

export default NavigationItem

const styles = StyleSheet.create({
	optionLogo: {
		width: 120,
		height: 120,
		resizeMode: "contain",
		marginBottom: 10,
	},
})

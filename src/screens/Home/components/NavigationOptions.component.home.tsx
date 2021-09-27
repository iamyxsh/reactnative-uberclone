import React from "react"
import { FlatList, StyleSheet } from "react-native"
import tw from "tailwind-react-native-classnames"
import { ScreenEnums } from "../../../configs/enums/screens.enums"
import { RootStackParamList } from "../../../types/navigation"
import NavigationItem from "./NavigationItem.component.home"

const data = [
	{
		id: 1,
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: ScreenEnums.map as keyof RootStackParamList,
	},
	{
		id: 2,
		title: "Order Food",
		image: "https://links.papareact.com/28w",
		screen: ScreenEnums.eat as keyof RootStackParamList,
	},
]

const NavigationOptions = () => {
	return (
		<FlatList
			data={data}
			horizontal
			keyExtractor={(item) => `${item.id}`}
			renderItem={({ item }) => <NavigationItem data={item} />}
			style={tw`mx-auto`}
		/>
	)
}

export default NavigationOptions

const styles = StyleSheet.create({})

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { RootStackParamList } from "../types/navigation"
import "react-native-gesture-handler"

import HomeScreen from "./Home/Home.screen"
import MapScreen from "./Map/Map.screen"
import { ScreenEnums } from "../configs/enums/screens.enums"

const StackNavigator = () => {
	const Stack = createStackNavigator<RootStackParamList>()

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={ScreenEnums.home as keyof RootStackParamList}
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name={ScreenEnums.map as keyof RootStackParamList}
					component={MapScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default StackNavigator

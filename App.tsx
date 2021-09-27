import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import store from "./src/redux/store"
import "react-native-gesture-handler"
import StackNavigator from "./src/screens/stackNavigator"

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<StackNavigator />
			</SafeAreaProvider>
		</Provider>
	)
}

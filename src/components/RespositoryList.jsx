import React from "react";
import { Text, FlatList, View, StyleSheet } from 'react-native'
import repositories from "../data/repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";
import StyledText from './StyledText.jsx'

const RepositoryList = () => {
	return (
		<FlatList 
			data={repositories}
			ItemSeparatorComponent={() => <Text> </Text>} // no es lo correcto dice midu
			renderItem={({ item: repo }) => (
				<RepositoryItem {... repo}/>
			)}
		/>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		padding: 20,
// 		paddingBottom: 5,
// 		paddingTop: 5
// 	}
// })

export default RepositoryList;
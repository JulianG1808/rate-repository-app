import React, { useEffect, useState } from "react";
import { Text, FlatList } from 'react-native'
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../hooks/useRepositories.js";

const RepositoryList = () => {
	const { repositories } = useRepositories()
	
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
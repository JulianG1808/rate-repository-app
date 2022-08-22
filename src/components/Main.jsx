import React from "react";
import { View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from "./RespositoryList.jsx";
import AppBar from "./AppBar.jsx";

const Main = () => {
    return (
      <View style={{ flex: 1}}>{/* todos los View vienen por defecto con display: flex y flexDirection: column */}
				<AppBar />
        <RepositoryList />
      </View>
    )
}

export default Main;
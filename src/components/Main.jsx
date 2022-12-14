import React from "react";
import { Text, View } from 'react-native'
import RepositoryList from "./RespositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { /* Redirect */ Route, Routes  } from "react-router-native";
import LogInForm from "../pages/LogInForm.jsx";

const Main = () => {
    return (
      <View style={{ flex: 1}}>{/* todos los View vienen por defecto con display: flex y flexDirection: column */}
				<AppBar />
        <Routes>
          <Route exact path='/' element={<RepositoryList />} />
          <Route exact path='/signin' element={<LogInForm />} />
          {/* <Redirect to='/' /> */}
        </Routes>
      </View>
    )
}

export default Main;
import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../theme.js'

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
            </View>
            <View style={{ flex: 1 }}> 
                <StyledText fontWeight='bold'>{fullName}</StyledText>
                <StyledText color='secondary'>{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View>
    )
}


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {... props}/>
            <RepositoryStats {... props}/>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
        paddingVertical: 5
	},
    language: {
        padding: 4,
        marginVertical: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start', //esto es para que el background tenga el tamaño del texto, y no todo el width
        borderRadius: 4,
        overflow: 'hidden' //a veces es necesario el overflow: hidden para poder ver el borderRadius
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 4
    }
})

export default RepositoryItem;
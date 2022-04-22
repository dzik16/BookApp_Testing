import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { Color } from '../../../../config/utils/color'
import { IconBack } from "../../../../assets"

const header = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image source={IconBack} style={styles.btn} />
			</TouchableOpacity>
		</View>
	)
}

export default header

const styles = StyleSheet.create({
	container: {
		height: 50,
		paddingTop: 20,
		backgroundColor: Color.BACKGROUND_DETAIL
	},
	btn: {
		width: 30,
		height: 30,
	}
})
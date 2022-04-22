import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

import { Color } from '../../../config/utils/color'

import Header from './components/header'
import Video from './components/video'
import Document from './components/document'
import Audio from './components/audio'

const MediaScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.container}>
        <Video />
        <Document />
        <Audio />
      </View>
    </ScrollView>
  )
}

export default MediaScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_DETAIL,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.BACKGROUND_DETAIL,
  }
})
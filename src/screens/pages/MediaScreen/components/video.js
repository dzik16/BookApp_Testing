import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from "react-native-video"

import { Color } from '../../../../config/utils/color'

const video = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>MEDIA HANDLING</Text>
      <View style={styles.content}>
        <Text style={styles.txtContent}>VIDEO</Text>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          style={{ width: 400, height: 190 }}
          controls
          ignoreSilentSwitch="ignore"
          resizeMode="cover"
          poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
        />
      </View>
    </View>
  )
}

export default video

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  judul: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.BLACK,
    marginTop: -30
  },
  content: {
    paddingTop: 30
  },
  txtContent: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.BLACK,
    alignSelf: "center",
    marginBottom: 10
  }
})
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Pdf from "react-native-pdf"

import { Color } from '../../../../config/utils/color'

class document extends React.Component {
  state = {
    pdfLink: ''
  }

  onButtonOpenClick = () => {
    this.setState({
      pdfLink: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.judul}>DOCUMENTS</Text>
        <View style={{ alignItems: "center", flex: 1, paddingTop: 10 }}>
          <Button title='Open PDF Document' onPress={this.onButtonOpenClick} style={styles.btn} />
          <View>
            {this.state.pdfLink ? <Pdf
              source={{ uri: this.state.pdfLink }}
              style={{ height: 400, width: 400, marginTop: 5 }}
            /> : null}
          </View>
        </View>
      </View>
    )
  }
}

export default document

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  judul: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.BLACK,
    alignSelf: "center",
    marginTop: -20
  },
  btn: {
    width: 20,
    height: 20
  }
})
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Sound from 'react-native-sound';
import { Color } from '../../../../config/utils/color'
import { Audio } from '../../../../assets';

const audio = () => {
  const [action, setAction] = useState(false);

  const audio = new Sound(
    Audio,
  );

  useEffect(() => {
    Sound.setCategory('Playback', true);
    audio.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);

  const onActions = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setAction(false);
    } else {
      audio.play();
      setAction(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>AUDIO</Text>
      <TouchableOpacity style={styles.btn} onPress={onActions}>
        <Text style={{ color: Color.BLACK, fontWeight: "bold" }}>{action ? "PAUSE" : "PLAY"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default audio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20
  },
  judul: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.BLACK,
    alignSelf: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 100,
    height: 30,
    borderRadius: 8,
    backgroundColor: Color.BACKGROUND_MAIN
  }
})
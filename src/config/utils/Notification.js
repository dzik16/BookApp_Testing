import PushNotification from 'react-native-push-notification';

class Notification {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },

      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
      requestPermissions: true,
      requestPermissions: Platform.OS === 'ios',
    });
  };

  createChannel = channel => {
    // import PushNotification, {Importance} from 'react-native-push-notification';
    PushNotification.createChannel(
      {
        channelId: channel, // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        // importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  sendNotification = (channel, title, message) => {
    PushNotification.localNotification({
      channelId: channel,
      title: title, // (optional)
      message: message, // (required)
    });
  };

  sendNotificationSchedule = (channel, title, message) => {
    PushNotification.localNotificationSchedule({
      channelId: channel,
      message: message, // (required)
      date: new Date(Date.now() + 3 * 1000), // in 60 secs
      title: title,
    });
  };
}

export const notification = new Notification();

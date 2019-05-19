
import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_KEY = "Flashcard:QuizNotification";

function createNotification() {
  return {
    title: "It's time to practice!",
    body: "👋 don't forget to practice today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  };
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationAsync);
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null)
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationAsync;

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(13);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: tomorrow,
                repeat: 'day',
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
    })
}
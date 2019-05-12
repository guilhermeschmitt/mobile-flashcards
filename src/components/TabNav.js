// import React from 'react';
// import { Platform } from 'react-native';
// import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';
// import DeckList from '../views/DeckList';
// import NewDeck from '../views/NewDeck';

// const RouteConfigs = {
//   DeckList: {
//     screen: DeckList,
//     navigationOptions: {
//       tabBarLabel: "DECKS",
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     }
//   },
//   NewDeck: {
//     screen: NewDeck,
//     navigationOptions: {
//       tabBarLabel: "NEW DECK",
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     }
//   }
// };

// const TabNavigatorConfig = {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === "ios" ? '#800080' : '#000',
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === "ios" ? '#000' : '#800080',
//       shadowColor: "rgba(0, 0, 0, 0.24)",
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// };

// const Tabs =
//   Platform.OS === "ios"
//     ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
//     : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

// export default createAppContainer(Tabs);
import { StyleSheet } from 'react-native';
import { white, lightGray, black, gray, green, secondBlue, red } from './colors';

export const deckListStyle = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 25,
    fontStyle: 'italic',
  },
  emptyList: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  addDeckButton: {
    backgroundColor: secondBlue,
    borderColor: secondBlue,
    fontSize: 30,
    textAlign: 'center',
    color: white,
  },
  deckList: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export const deckComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: secondBlue,
    padding: 30,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: white,
  },
  quantidade: {
    color: lightGray,
    fontWeight: 'bold',
  }
})

export const createDeckStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: black,
    padding: 10,
  },
  submitButton: {
    color: white,
    backgroundColor: secondBlue,
    borderColor: secondBlue
  },
})

export const deckDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: black,
  },
  quantidade: {
    color: gray,
    fontWeight: 'bold',
    fontSize: 15
  },
  startQuiz: {
    color: white,
    backgroundColor: secondBlue,
    borderColor: secondBlue
  },
  addCard: {
    color: white,
    backgroundColor: green,
    borderColor: green
  }
});

export const createCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: black,
    padding: 10,
  },
  submitButton: {
    color: white,
    backgroundColor: secondBlue,
    borderColor: secondBlue
  },
});

export const inputTextStyle = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    width: 300,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderColor: '#fff',
  }
});

export const gamePanelStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttons: {
    marginTop: 35,
  },
  correctButton: {
    color: white,
    backgroundColor: green,
    borderColor: green,
  },
  incorrectButton: {
    color: white,
    backgroundColor: red,
    borderColor: red,
  },
  info: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: secondBlue,
    width: 250,
    borderRadius: 5,
    borderColor: secondBlue,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 5,
    paddingRight: 5
  },
  count: {
    fontWeight: 'bold',
    fontSize: 15
  },
  question: {
    fontSize: 25,
    fontWeight: 'bold',
    color: white,
    textAlign: 'center',
    paddingBottom: 20
  },
  option: {
    color: black,
    backgroundColor: lightGray,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    borderColor: lightGray,
  },
});

export const gameScoreStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  restartQuiz: {
    color: white,
    backgroundColor: secondBlue,
    borderColor: secondBlue
  },
  backToDeck: {
    color: white,
    backgroundColor: red,
    borderColor: red
  },
  buttons: {
    marginTop: 35,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: black,
    marginBottom: 5
  },
  subtitle: {
    fontSize: 15,
    color: black,
    marginBottom: 5
  },
  score: {
    fontSize: 50,
    color: green
  }

})

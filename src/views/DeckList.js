import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Deck from '../components/Deck';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class DeckList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;

    getDecks()
      .then(response => dispatch(receiveDecks(response)))

    //TODO: NOTIFICAO?

  }

  renderItem = ({ item }) => (
    <Deck
      title={item.title}
      cards={item.cards}
      deckId={item.id}
      navigation={this.props.navigation}
      key={item.id}
    />
  )

  render() {

    const { decks } = this.props;

    //TODO: FAZER UM LOAD SE PA

    return decks.length <= 0
      ? (
        <View>
          <Text>
            //TODO: FAZER UM BOTÃO PRA CADASTRAR AQUI
            Nenhum deck cadastrado
          </Text>
        </View>
      ) : (
        < View style={styles.container} >
          <FlatList
            data={decks}
            renderItem={this.renderItem}
          />
        </View >
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

function mapStateToProps(decks) {
  return {
    decks: Object.values(decks)
  }
}

export default connect(mapStateToProps)(DeckList);
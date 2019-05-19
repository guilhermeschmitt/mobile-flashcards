import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Deck from '../components/Deck';
import { getDecks } from '../utils/api';
import { deckListStyle } from '../utils/styles';
import { receiveDecks } from '../actions';
import TextButton from '../components/TextButton';

class DeckList extends React.Component {

  state = {
    loading: true,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
      .then(response => dispatch(receiveDecks(response)))
      .then(() => this.setState({ loading: false }));
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
    const { decks, navigation } = this.props;

    if (this.state.loading)
      return (
        <View style={deckListStyle.loadingContainer}>
          <Text style={deckListStyle.loadingText}>
            Loading...
          </Text>
        </View>
      )

    if (decks.length <= 0)
      return (
        <View style={deckListStyle.emptyList}>
          <TextButton
            onPress={() => navigation.navigate('CreateDeck')}
            style={deckListStyle.addDeckButton}
          >
            NEW DECK
          </TextButton>
        </View>
      );

    return (
      < View style={deckListStyle.deckList} >
        <FlatList
          data={decks}
          renderItem={this.renderItem}
        />
      </View >
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  return {
    decks: Object.values(decks),
    navigation
  }
}

export default connect(mapStateToProps)(DeckList);
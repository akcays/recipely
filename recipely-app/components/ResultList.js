// TODO: RecipeList.js and ResultList.js share a lot of code. Maybe refactor to
// use higher order components. 
import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button
} from 'react-native';
import { Card } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

// Navigation prop needs to be passed down because it does not get passed down
// child components.
const ResultList = ({ navigation, recipes }) => {
  onLearnMore = (recipe) => {
    // When user presses on "Details" button, navigate them to a detail screen.
    // Pass down props that can be acessed using this.props.navigation.state.params
    navigation.navigate('SearchDetail', { ...recipe });
  }

  return (
    <ScrollView>
      { recipes.map(recipe => {
          return (
            <Card
              key={recipe.recipe_id}
              title={recipe.title}
              image={{ uri: recipe.image_url }}
            >
              <Text style={styles.publisherText}>{recipe.publisher}</Text>
              <View style={styles.buttonContainer}>
                <Button
                  title='Details'
                  onPress={() => this.onLearnMore(recipe)}
                />
                <MaterialIcons name="add" size={28} color="#aaa" />
              </View>
            </Card>
          );
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  publisherText: {
    marginBottom: 10,
  },
});

export default ResultList;
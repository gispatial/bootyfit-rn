import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, SafeAreaView, SectionList } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'BOOTYFIT',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <View>
        <Image source={{uri: 'http://gharxy.digital/stage/wp-content/uploads/2020/10/topbanner.png'}}
                 style={{width: 410, height: 200}} />
                 <Text style={{ fontSize: 11 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanks for trying BootyFit, Your personal guide in shaping health</Text>
                 <Text style={{ fontSize: 14 }}>&nbsp;&nbsp;&nbsp;Recipe Tips w/ Realtime booking by <Text style={{ color: 'red' }}>Certified PT Expert</Text>
</Text>
        </View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={8}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
        <Text style={{ fontSize: 14 }}>&nbsp;&nbsp;&nbsp;&nbsp;An awesome project by RiotGrr developed by <Text style={{ color: 'green' }}>Rizq Solutions</Text>
        </Text>
                </View>
    );
  }
}

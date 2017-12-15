import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import * as categoriesServices from '../../Services/agriCategories';

const BACON_IPSUM = 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'left',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'left',
    fontFamily:'Roboto-Regular',
    fontSize: 22,
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    
    color:'black',
    fontFamily:'Roboto-Regular',
    
    textAlign: 'left',
    fontSize: 16
  },
  content: {
    padding: 10,
    
    backgroundColor: '#fff',
    
    
  },
  maincontent: {
    
    fontFamily:'Roboto-Regular',
    backgroundColor: '#fff',
    borderBottomWidth:3,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'green',
    justifyContent: 'center'
    
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
    
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontFamily:'Roboto-Regular',
    
    padding: 10,
  },
});

export default class ExampleView extends Component {
  state = {
    apiData:[],
    activeSection: false,
    collapsed: true,
    
  };

  componentWillMount() {
    this.getData()
  }

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    console.log(section,"107")
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.item}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    console.log(section,"116")
    return (
      <Animatable.View duration={400} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined} style={[styles.maincontent]}>{BACON_IPSUM}</Animatable.Text>
      </Animatable.View>
    );
  }

  getData = () => {
    const { data } = this.props
    var weakSelf = this;
    categoriesServices.categoriesService.getCategories(data.id, 'en').then(function (response) {
      console.log("in api", response)
      if (response.success) {
        console.log("success")
        // apiData
        weakSelf.setState({apiData:response.data})
      } else {
        Alert.alert('response', 'response.data[0]')
        // Alert.alert(language.alert, language.somethingWentWrong, [{text: (language ? language.ok : '')}]);
      }
    }).catch(function (error) {
      Alert.alert('error', 'kdjsfahlkjdshfl')
      // Alert.alert(language.alert, language.somethingWentWrong, [{text: (language ? language.ok : '')}]);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Processes</Text>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible>
        <Accordion
          activeSection={this.state.activeSection}
          sections={this.state.apiData}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />
      </View>
    );
  }
}
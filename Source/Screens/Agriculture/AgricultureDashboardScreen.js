import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import GridView from "react-native-easy-grid-view";
import { Actions } from 'react-native-router-flux';
import * as categoriesServices from '../../Services/agriCategories';

var rows = [
    { id: '5a2e8ab5cd3d6519885d6e6c', title: 'Fruits ', description: '' },
    { id: '5a2e8ab5cd3d6519885d6e6b', title: 'Vegetables ', description: '' },
    { id: '5a2e8ab5cd3d6519885d6e6a', title: 'Grains ', description: '' },
    { id: '5a2e8ab5cd3d6519885d6e69', title: 'Pulses ', description: '' },
    { id: '5a2e8ab5cd3d6519885d6e6d', title: 'Cotton ', description: '' },
    { id: '5a2e8ab5cd3d6519885d6e6e', title: 'Others ', description: '' },
]
const rowHasChanged = (r1, r2) => r1.id !== r2.id
const title = 'Lorem '
const ds = new GridView.DataSource({ rowHasChanged })
export default class AgricultureDashboardScreen extends Component {
    state = {
        dataSource: ds.cloneWithRows(rows),
        cellWidth: 0,
        cellHeight: 0
    }
    // var image = require('../Images/logo.png')
    renderRow = (rowData) => {
        switch (rowData.id) {
            case '5a2e8ab5cd3d6519885d6e6c':
                image = require('../../Images/Agriculture/apple.png')
                break;
            case '5a2e8ab5cd3d6519885d6e6b':
                image = require('../../Images/Agriculture/vegetables.png')
                break;
            case '5a2e8ab5cd3d6519885d6e6a':
                image = require('../../Images/Agriculture/sack.png')
                break;
            case '5a2e8ab5cd3d6519885d6e69':
                image = require('../../Images/Agriculture/seeds.png')
                break;
            case '5a2e8ab5cd3d6519885d6e6d':
                image = require('../../Images/Agriculture/fertilizer.png')
                break;
            case '5a2e8ab5cd3d6519885d6e6e':
                image = require('../../Images/Agriculture/fertilizer.png')
                break;
        }

        return (<View onLayout={event => {
            var width = event.nativeEvent.layout.width;
            if (this.state.cellWidth != width) {
                this.setState({ cellWidth: width })
            }
            if (this.state.cellHeight != width) {
                this.setState({ cellHeight: width })
            }
        }}>
            <TouchableOpacity onPress={this._onSelectCell.bind(this, rowData)}>
            <View style={{width:this.state.cellWidth, height:this.state.cellHeight, justifyContent:'center', backgroundColor:'white', borderRadius: 3, borderWidth: 1, borderColor: '#88888888',}}>
             {<Image source={image} style={styles.imageView} resizeMode='contain' />}


                 <Text style={{backgroundColor:'white',textAlign:'center',color:'black',fontSize:20, paddingTop: 10,fontFamily:'Roboto-Light'}}>{rowData.title}</Text>
             </View>
                {/* <View style={{ width: this.state.cellWidth, height: this.state.cellHeight, justifyContent: 'center', backgroundColor: 'white', borderRadius: 3, borderWidth: 1, borderColor: '#88888888', }}>
                    {<Image source={image} style={styles.imageView} resizeMode='contain' />}


                    <Text style={{ backgroundColor: 'white', textAlign: 'center', color: 'black', fontSize: 20, paddingTop: 10, fontFamily: 'Roboto-Light' }}>{rowData.title}</Text>
                </View> */}

            </TouchableOpacity>
        </View>
        )
    }


    _onSelectCell = (data) => {
        Actions.procedureScreen({data: data});
        // const { language } = this.props
        //     this.setState({ showIndicator: true })
            
        //     console.log('data', data.id);
        //     var weakSelf = this
        //     categoriesServices.categoriesService.getCategories(data.id, 'hi').then(function (response) {
        //         console.log("in api", response)
        //         // weakSelf.setState({ showIndicator: false })
        //         if ( response.success) {
        //             console.log("success")
        //             // 
                            
        //         } else {
        //             Alert.alert('response', 'response.data[0]')
        //             // Alert.alert(language.alert, language.somethingWentWrong, [{text: (language ? language.ok : '')}]);
        //         }
        //     }).catch(function (error) {
        //         // weakSelf.setState({ showIndicator: false })
        //         Alert.alert('error', 'kdjsfahlkjdshfl')
        //         // Alert.alert(language.alert, language.somethingWentWrong, [{text: (language ? language.ok : '')}]);
        //     });
        
        //Actions.procedureScreen();
        //Alert.alert('Selected Item', data.text)
    }



    render() {
        return (
            <View style={styles.collectionView}>
                <GridView dataSource={this.state.dataSource}
                    spacing={20}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }
    // _renderCell(cell) {
    //     // var image = null
    //     switch (cell.tag) {
    //         case 0:
    //             image = require('../../Images/Agriculture/apple.png')
    //             break;
    //         case 1:
    //             image = require('../../Images/Agriculture/vegetables.png')
    //             break;
    //         case 2:
    //             image = require('../../Images/Agriculture/sack.png')
    //             break;
    //         case 3:
    //             image = require('../../Images/Agriculture/seeds.png')
    //             break;
    //         case 4:
    //             image = require('../../Images/Agriculture/fertilizer.png')
    //             break;
    //     }
    //     return (<View onLayout={event => {
    //       var width = event.nativeEvent.layout.width;
    //      if(this.state.cellWidth!=width){
    //      this.setState({cellWidth:width})
    //      }
    //      if(this.state.cellHeight!=width){
    //      this.setState({cellHeight:width})
    //      }
    //     }}>
    //     <TouchableOpacity onPress={this._onSelectCell.bind(this, cell)}>
    //         <View style={{width:this.state.cellWidth, height:this.state.cellHeight, justifyContent:'center', backgroundColor:'white', borderRadius: 3, borderWidth: 1, borderColor: '#88888888',}}>
    //         {<Image source={image} style={styles.imageView} resizeMode='contain' />}


    //             <Text style={{backgroundColor:'white',textAlign:'center',color:'black',fontSize:20, paddingTop: 10,fontFamily:'Roboto-Light'}}>{cell.text}</Text>
    //         </View>
    //     </TouchableOpacity>
    //   </View>)
    // }
    // constructor(props) {
    //     super(props);
    //     var dataArray = ['Fruits', 'Vegetables', 'Pulses', 'Seeds', 'Fertilizers']
    //     var displayArray = []
    //     for (var i=0; i<rows.length; i++) {
    //         displayArray.push({
    //             tag: i,
    //             text: dataArray[i],
    //             backgroundColor: 'black'
    //         })
    //     }
    //     console.log(displayArray,"dd");
    //     var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //     this.state = {
    //         dataSource: ds.cloneWithCells(
    //             displayArray
    //             , 2),
    //         cellWidth: 0,
    //         cellHeight: 0
    //     };
    // }
}



const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    collectionView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
        paddingRight: 30,
    },
    imageBackgroundView: {
        backgroundColor: 'black',
        height: '60%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '20%'
    },
    imageView: {
        opacity: 0.7,
        position: 'relative',
        left: 40,
        width: 75,
        height: 75,
        resizeMode: 'contain',
    },
    cardView: {
        flex: 0,
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        // overflow: 'hidden'
    },
    textLabel: {
        margin: 30,
        marginRight: 10,
        width: '55%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444444'
    },

});
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import GridView from "react-native-easy-grid-view";
import { Actions } from 'react-native-router-flux';


export default class AgricultureDashboardScreen extends Component {

    constructor(props) {
        super(props);
        var dataArray = ['Fruits', 'Vegetables', 'Pulses', 'Seeds', 'Fertilizers']
        var displayArray = []
        for (var i=0; i<dataArray.length; i++) {
            displayArray.push({
                tag: i,
                text: dataArray[i],
                backgroundColor: 'black'
            })
        }
        var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithCells(
                displayArray
                , 2),
            cellWidth: 0,
            cellHeight: 0
        };
    }

    _onSelectCell=(data)=> {
        console.log('cellData', data)
        Actions.procedureScreen();
      //Alert.alert('Selected Item', data.text)
    }

    _renderCell(cell) {
        return (<View onLayout={event => {
          console.log(cell)
          var width = event.nativeEvent.layout.width;
         if(this.state.cellWidth!=width){
         this.setState({cellWidth:width})
         }
         if(this.state.cellHeight!=width){
         this.setState({cellHeight:width})
         }
        }}>
        <TouchableOpacity onPress={this._onSelectCell.bind(this, cell)}>
            <View style={{width:this.state.cellWidth, height:this.state.cellHeight, justifyContent:'center', backgroundColor:'white', borderRadius: 3, borderWidth: 1, borderColor: '#88888888',}}>
                <View style={{backgroundColor:'black', height: '60%', width: '60%', justifyContent: 'center', alignItems: 'center', marginLeft: '20%'}}/>
                <Text style={{backgroundColor:'white',textAlign:'center',color:'black',fontSize:20, paddingTop: 10}}>{cell.text}</Text>
            </View>
        </TouchableOpacity>
      </View>)
    }

	render() {
		return(
		<View  style={styles.collectionView}>
            <GridView dataSource={this.state.dataSource}
            spacing={20}
            renderCell={this._renderCell.bind(this)}
            />
        </View>
		)
	}
}

export class AgricultureDashboardCard extends Component {

    render() {
    	//const marginTop = 10;
        //const marginBottom = 10;
       	const image = require('../../Images/logo.png');
		return (
            <TouchableOpacity style={[styles.cardView, { marginTop: marginTop, marginBottom: marginBottom }]}>
                
                <Image source={image} style={styles.imageView} resizeMode='contain' />
            </TouchableOpacity>
            
        )
    }
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
        backgroundColor:'black',
        height: '60%', 
        width: '60%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: '20%'
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
    imageView: {
        width: '25%',
        aspectRatio: 1,
        margin: 10,
    }
});
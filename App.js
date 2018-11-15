/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Platform } from 'react-native';
import Swipeout from 'react-native-swipeout';
// import SwipeRightComponent from './SwipeRightComponent'
import rows from './data';
import { totalSize, width } from "react-native-dimension";
var btnsTypes = [
  { text: 'Primary', },
  { text: 'Secondary', },
  { text: 'Delete', }
];

export default class App extends Component {
  constructor() {
    super();

    //  datasource rerendered when change is made (used to set swipeout to active)
    var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => true });

    this.state = {
      dataSource: ds.cloneWithRows(rows),
      sectionID: null,
      rowID: null,
    };
  }


  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <Swipeout
        // close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        right={btnsTypes}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={true}
        backgroundColor="gray"
      >
        <View  style={{ width: width(100), backgroundColor: "rgba(248,248,248,1)" }}>
          <View style={{ alignSelf: "center", flexDirection: "row", }}>
            <View style={{ width: width(25), }}>
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Text style={styles.stockStyle}>Stock#</Text>
                  {/* <Text style={styles.valueStyle}>{item.stockno}</Text> */}
                  <Text style={styles.valueStyle}>17183R</Text>
                </View>
                <View style={{ marginTop: totalSize(1) }}>
                  <Text style={styles.stockStyle}>Year</Text>
                  {/* <Text style={styles.valueStyle}>{item.year}</Text> */}
                  <Text style={styles.valueStyle}>2007</Text>
                </View>
              </View>
            </View>
            <View style={{ width: width(45), }}>
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Text style={styles.stockStyle}>Model</Text>
                  {/* <Text style={styles.valueStyle}>{item.model}</Text> */}
                  <Text style={styles.valueStyle}>Toyota Camry</Text>
                </View>
                <View style={{ marginTop: totalSize(1) }}>
                  <Text style={styles.stockStyle}>VIN</Text>
                  {/* <Text style={styles.valueStyle}>{item.vin}</Text> */}
                  <Text style={styles.valueStyle}>TRE456K17UFW173</Text>
                </View>
              </View>
            </View>
            <View style={{ width: width(20), }}>
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Text style={styles.stockStyle}>Status</Text>
                  {/* <Text style={styles.forSale}>{item.status}</Text> */}
                  <Text style={styles.forSale}>For Sale</Text>
                </View>
                <View style={{ marginTop: totalSize(1) }}>
                  <Text style={styles.stockStyle}>Color</Text>
                  <View>
                    {/* <Text style={styles.valueStyle}>{item.colour}</Text> */}
                    <Text style={styles.valueStyle}>Yellow</Text>
                    {/* <View style={[styles.bullet, { backgroundColor: this.getColorHexCode(data.color) }]}></View> */}
                  </View>
                  {/* <Text style={styles.valueStyle}>{data.color}</Text> */}
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* <TouchableWithoutFeedback onPress={() => console.log('press children')}>
          <View style={styles.li} >
            <Text style={styles.liText}>SwipeOut</Text>
          </View>
        </TouchableWithoutFeedback> */}
      </Swipeout>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <View style={styles.navbar}><Text style={styles.navbarTitle}>Swipeout</Text></View>
        <ListView
          scrollEnabled
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={styles.listview}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
    backgroundColor: "white"
  },
  li: {
    backgroundColor: 'white',
    borderBottomColor: '#eee',
    // borderColor: 'white',
    // borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  listEvenStyle: {
    height: totalSize(13),
    width: width(100),
    marginTop: -totalSize(2),
    borderWidth: 0,
    borderColor: "transparent",
    borderBottomColor: "white",
    backgroundColor: "rgba(248,248,248,1)",
  },
  listOddStyle: {
    height: Platform.OS === 'ios' ? totalSize(11.2) : totalSize(13),
    width: width(100),
    marginTop: -totalSize(2),
    borderWidth: 0,
    borderColor: "transparent",
    borderBottomColor: "white",
    backgroundColor: "white",
  },
  stockStyle: {
    // fontFamily: 'Raleway-Medium',
    fontSize: totalSize(1.5),
    color: "rgba(236,28,36,1)"
  },
  valueStyle: {
    // fontFamily: 'Roboto-Medium',
    fontSize: totalSize(1.5),
    color: '#000000'
  },
  forSale: {
    fontFamily: 'Roboto-Medium',
    fontSize: totalSize(1.5),
    color: '#000000'
  },
});

/**
 * Created by sunil on 3/26/18.
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SectionList, FlatList, Dimensions, Image} from 'react-native';

import {CompanyInfo} from './CompanyInformation'
import {Images} from './Images'


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export default class FlatInSection extends Component {

    onItemDidSelect(selectedItem) {
        Alert.alert(
            selectedItem.organization,
            selectedItem.designation + ' ' + selectedItem.applicationStatus
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <SectionList
                    sections={
                        [
                            {
                                data:CompanyInfo.data
                            },
                        ]
                    }

                    renderItem={({item}) =>
                        <FlatList
                            data={
                                item.jobs
                            }

                            horizontal={true}

                            pagingEnabled={true}

                            renderItem={({item}) =>

                                <TouchableOpacity
                                    onPress={() => this.onItemDidSelect(item)}
                                    style={styles.itemMainContainer}

                                    activeOpacity={0.8}
                                >
                                    <View style={styles.itemContainer01}>

                                        {/*Main Content view*/}
                                        <View style={styles.applicationDetailsContainer}>
                                            <Text style={[styles.organization, {fontSize: 8}]}>{'FROM'}</Text>
                                            <Text style={styles.organization}>{item.cost}</Text>
                                        </View>
                                    </View>


                                    <View style={styles.itemContainer02}>

                                        <Image style={{width: (deviceWidth/2) - 30, height: (deviceWidth/2) - 30, overflow: 'hidden', resizeMode: 'contain', backgroundColor:'transparent'}}
                                               source={Images.shoe01}/>

                                        <View style={styles.applicationDetailsContainerTop}>
                                            <Text style={[styles.organization, {fontSize: 8}]}>{item.model}</Text>
                                            <Text style={styles.organization}>{item.name}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }

                            keyExtractor={(item, index) => index}
                        />
                    }

                    keyExtractor={(item, index) => index}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'transparent',
    },

    itemMainContainer: {
        flex: 1,
        width: deviceWidth / 2,
        height: deviceHeight / 2,
        padding:20,
        borderColor:'#d3d3d3',
        borderWidth:3
    },
    itemContainer01: {
        flex: 0.3,
        flexDirection: 'column',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        // backgroundColor:'blue',
    },
    itemContainer02: {
        flex: 0.7,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'green',
    },

    /**
     * Content View
     */
    /*Main*/
    applicationDetailsContainer: {
        width: (deviceWidth/7),
        height: (deviceWidth/7),
        borderRadius:((deviceWidth/14)),
        backgroundColor:'white',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.5,
        borderColor:'gray',
    },

    applicationDetailsContainerTop: {
        width: (deviceWidth/2) - 30,
        padding:'8%',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },

    /*Sub*/
    organization: {
        textAlign: 'left',
        fontSize: 12,
        justifyContent:'center',
        alignItems:'center',
    },
});
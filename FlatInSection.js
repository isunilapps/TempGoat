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
                                    onPress={() => this.onItemDidSelect(item)}>

                                    <View style={styles.item}>

                                        {/*One complete item view*/}
                                        <View style={styles.itemContainer}>

                                            {/*Main Content view*/}
                                            <View style={styles.applicationDetailsContainer}>
                                                <Text style={[styles.organization, {fontSize: 8}]}>{'FROM'}</Text>
                                                <Text style={styles.organization}>{item.cost}</Text>
                                            </View>
                                            <Image style={{width: (deviceWidth/2) - 50, height: (deviceWidth/2) - 50, marginLeft: 20, overflow: 'hidden', resizeMode: 'contain', backgroundColor:'white'}}
                                                   source={Images.shoe01}/>

                                        </View>

                                        {/*Separation Line view*/}
                                        <View style={styles.separatorLine}/>

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
        backgroundColor:'white',
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'gray',
        width: deviceWidth / 2,
        height: deviceHeight / 2,
        padding:5,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent:'flex-start',
        alignItems:'flex-end',

        padding:20,
    },

    /**
     * Separator Line
     */
    separatorLine: {
        height: 0.5,
        backgroundColor: 'gray',
        marginLeft: '3%',
        marginRight: '3%',
    },


    /**
     * Left side view
     */
    /*Main*/
    applicationStatusContainer: {
        width: '24%',
        padding:'3%',
    },
    applicationStatus: {
        padding:'3%',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize: 8.5,
        borderRadius:2.5,
        backgroundColor:'green',
        color:'white',
        overflow:'hidden',
    },

    /**
     * Right side view
     */
    /*Main*/
    applicationTimerContainer: {
        width: '70%',
        padding: '3%'
    },
    applicationTimerStatus: {
        fontSize: 10.5,
        color:'gray',
        overflow:'hidden',
        textAlign:'right',
        textAlignVertical:'auto',
    },

    /**
     * Content View
     */
    /*Main*/
    applicationDetailsContainer: {
        width: (deviceWidth/6),
        height: (deviceWidth/6),
        borderRadius:((deviceWidth/12)),
        padding:'8%',
        backgroundColor:'white',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.5,
        borderColor:'gray',

        backgroundColor:'white'

    },

    /*Sub*/
    organization: {
        textAlign: 'left',
        fontSize: 12,
        justifyContent:'center',
        alignItems:'center',
    },
    designation: {
        textAlign: 'left',
        fontSize: 16,
    },
    skills: {
        textAlign: 'left',
        fontSize: 12,
        color: 'gray',
    },
});
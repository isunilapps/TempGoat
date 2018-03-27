/**
 * Created by sunil on 3/26/18.
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SectionList, FlatList, Dimensions} from 'react-native';

import {CompanyInfo} from './CompanyInformation'


const deviceWidth = Dimensions.get('window').width

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

                                            {/*Left side view*/}
                                            <View style={styles.applicationStatusContainer}>
                                                <Text style={[styles.applicationStatus,{backgroundColor:item.backgroundColor}]}>{item.applicationStatus}</Text>
                                            </View>

                                            {/*Main Content view*/}
                                            <View style={styles.applicationDetailsContainer}>
                                                <Text style={styles.organization}>{item.organization}</Text>
                                                <Text style={styles.designation}>{item.designation}</Text>
                                                <Text style={styles.skills}>{item.skills}</Text>
                                            </View>

                                            {/*Right side view*/}
                                            <View style={styles.applicationTimerContainer}>
                                                <Text style={styles.applicationTimerStatus}>{item.updatedTime}</Text>
                                            </View>

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
        backgroundColor: 'white',
        width: deviceWidth,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
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
        width: '24%',
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
        width: '52%',
        alignItems:'flex-start',
        paddingTop:'4%',
        paddingBottom:'4%',
    },

    /*Sub*/
    organization: {
        textAlign: 'left',
        fontSize: 11,
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
import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, ScrollView } from 'react-native'

export default class Contact extends Component {
    render() {
        return (
            <View>
                <Image style={{height: 170, width: '100%'}} source={{uri:this.props.img}}/>
                <View style={{borderRadius: 1,overflow: 'hidden',elevation: 6,height: 50,}}>
                    <Text style={{textAlign: 'center', padding: 13, fontSize: 22}}>{this.props.title}</Text>
                </View>
                <ScrollView>
                    <View style={{margin: 14,}}>
                        <Text style={{textAlign: 'justify', fontSize: 15}}>{this.props.description}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

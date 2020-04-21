import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableHighlight, FlatList,Image } from 'react-native'
import { Navigation } from 'react-native-navigation'

import data from '../data'

export default class HomeScreen extends Component {
    static options() {
        return {
            topBar: {
                title: {
                    text: 'হোম'
                }
            }
        }
    }
    constructor(props) {
        super(props)
    
        Navigation.events().bindComponent(this);
        
    }
    
    
    navigationButtonPressed({componentId}) {
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
                left: {visible: true}
            }
        })
    }

    onClickItem = (fullData) => {
        Navigation.push("CenterScreen", {
            component: {
                name: 'ContactScreen',
                passProps: {
                    title: fullData.title,
                    img: fullData.img,
                    description: fullData.description,
                },
                options: {
                    sideMenu: {
                        left: {visible: false}
                    },
                    topBar: {
                        title: {
                            text: fullData.title
                        }
                    }
                }
            }
        })
    }
    
    childView = ({childTitle,imgC,fullData}) => {
        return (
            <TouchableHighlight>
                <View style={{flexDirection: 'column', width: 170, height: 150,backgroundColor: 'white', margin: 5, borderRadius: 3,overflow: 'hidden',elevation: 6,marginTop: 10 }}>
                    <View>
                        <Image style={{height: 100, width: '100%'}} source={{uri:imgC}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <Text onPress={this.onClickItem.bind(this,fullData)} style={{color: 'black', fontSize: 18, textAlign:'center'}} >{childTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
       
        return (
            
            <FlatList 
                numColumns={2}
                horizontal={false} 
                data={data} 
                renderItem={({item}) => <this.childView fullData={item} childTitle={item.title} imgC={item.img}/>}  
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        margin: 10,
    }
})

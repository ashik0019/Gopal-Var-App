import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,ImageBackground  } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class SideMenuScreen extends Component {

    aboutGo = () => {
        Navigation.push("CenterScreen", {
            component: {
                name: 'AboutScreen',
                options: {
                    sideMenu: {
                        left: {visible: false}
                    },
                    topBar: {
                        title: {
                            text: "সম্পর্কে"
                        }
                    }
                }
            }
        })
    }

    contactGo = () => {
        Navigation.push("CenterScreen", {
            component: {
                name: 'ContactScreen',
                options: {
                    sideMenu: {
                        left: {visible: false}
                    },
                    topBar: {
                        title: {
                            text: "Contact With Me"
                        }
                    }
                }
            }
        })
    }

    potfolioGo = () => {
        Navigation.push("CenterScreen", {
            component: {
                name: 'PotfolioScreen',
                options: {
                    sideMenu: {
                        left: {visible: false}
                    },
                    topBar: {
                        title: {
                            text: "লেখক সম্পর্কে"
                        }
                    }
                }
            }
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../images/background5.png')} style={styles.backgroundImg}>
                <Image style={styles.profileImage} source={require('../images/g-home.png')}/>
                        <Text style={styles.proName}>গোপাল ভাঁড়</Text>
                </ImageBackground>
                <View style={styles.sideMenu}>
                    <View style={styles.sideMenuInner}>
                        <Text style={styles.menuText} onPress={this.aboutGo}><Image source={require('../images/info.png')}/> সম্পর্কে</Text>
                        <Text style={styles.menuText} ><Image source={require('../images/share.png')}/> শেয়ার </Text>  
                        <Text style={styles.menuText} onPress={this.potfolioGo}><Image source={require('../images/share_user.png')}/> লেখক সম্পর্কে </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImg: {
        width: undefined,
        padding: 16,
        paddingTop: 28,
        marginRight: 60,
    },
    sideMenu: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 60,
    },
    sideMenuInner: {
        flex: 1,
        backgroundColor: 'white',
        margin: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginLeft: '22%',
    },
    proName: {
        fontSize: 22,
        
        color: 'white',
        marginLeft: '20%'
    },
    menuText: {
        fontSize: 16,
        margin: 10,
    }

})



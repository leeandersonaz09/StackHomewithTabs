import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ImageBackground
} from 'react-native';


const Tab3 = () => {

    return (
        <View style={styles.container}>

            <ImageBackground
                source={{
                    uri: 'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png',
                }}
                style={styles.backgrounImage}
                imageStyle={{ borderBottomRightRadius: 65 }}
            >
                <View style={styles.darkOverlay}></View>
                <View style={styles.imageContainer}>
                    <Text style={styles.UserGreat}>RECENTS</Text>
                    <Text style={styles.userText}>Sub tittle</Text>
                </View>

            </ImageBackground>
            <View style={styles.contentContainer}>
                <View>

                    <Text>Está é sua última aba</Text>

                </View>
            </View>

        </View >
    )


}
export default Tab3;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },

    contentContainer: {
        padding: 15,

    },
    backgrounImage: {
        width: '100%',
        height: 240,

    },
    darkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 240,
        backgroundColor: '#000',
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    imageContainer: {
        paddingTop: 50,
        paddingLeft: 16
    },
    UserGreat: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
    },
    userText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white',
    },

    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontWeight: "bold",
    },

})
import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

const Dash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#020C1B" translucent = {true}/>
            <View style={styles.container}>
                <Text style={{color:"white",fontSize:25, marginLeft:'10%',marginTop:'5%',marginBottom:'5%',marginRight:'15%'}}>Welcome back!</Text>
                <Text style={{color:"white",fontSize:25, marginLeft:'10%',marginRight:'15%',fontWeight:"bold"}}>Categories</Text>
                <View style={styles.superImages}>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddTask')}>
                        <Image resizeMode="stretch" style={{width:320,height:160}} source={require('../assets/super1.png')} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>navigation.navigate('AddTask')}>
                        <Image resizeMode="stretch" style={{width:320,height:160,marginTop:"5%"}} source={require('../assets/super2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddTask')}>
                        <Image resizeMode="stretch" style={{width:320,height:160,marginTop:"5%"}} source={require('../assets/super3.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020C1B',
        alignItems: 'center',
    },
    superImages: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'column' ,
        marginTop:"5%",
    },
});

export default Dash
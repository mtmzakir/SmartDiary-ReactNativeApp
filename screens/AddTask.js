import React from 'react'
import {StatusBar, TextInput} from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

const AddTask = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#020C1B" translucent = {true}/>
                <Text style={{color:"white",fontSize:20,marginTop:20}}>Choose a Task :</Text>
                <TextInput style={styles.textField} placeholder={'Choose Here..'} />
                <Text style={{color:"white",fontSize:20, marginTop:20}}>Choose Date :</Text>
                <TextInput style={styles.textField} placeholder={'Choose Here..'} />
                <Text style={{color:"white",fontSize:20,marginTop:20}}>Set Reminder :</Text>
                <TextInput style={styles.textField} placeholder={'Set Here..'} />
                <Text style={{color:"white",fontSize:20,marginTop:20 }}>Special Note :</Text>
                <TextInput style={styles.textField} placeholder={'Enter Notes Here..'} />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Dash')}>
                    <Text style={styles.btnText}>ADD TASK</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020C1B',
        alignItems:"center"
    },
    container2: {
        flex: 1,
        backgroundColor: '#020C1B',
        alignItems:"center"
    },
    textField: {
        backgroundColor: "#CADDFF",
        padding: 20,
        borderRadius: 10,
        marginLeft:"10%",
        marginTop:"2%",
        marginRight:"10%",
        width:250
    },
    btn : {
        backgroundColor:'#7ED957',
        marginTop:10,
        borderRadius:22,
        width:160,
        alignItems: "center"
    },
    btnText: {
        color: "#020C1B",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});

export default AddTask
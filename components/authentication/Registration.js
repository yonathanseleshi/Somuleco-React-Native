import React, {Component} from 'react'
import {StyleSheet, Platform, View, TextInput} from 'react-native'
import {Button, Text} from "native-base";

export default class Registration extends Component {
    state = {

        fName: "",
        lName: "",
        username: "",
        email: "",
        displayName:"",
        password:""
    }

    constructor(props){

        super(props);




    }

    firstNameChangeHandler = (val) => {

        if(val.valid){

            this.setState({
                fName: val
            })

        }


    }

Render(){



    return(


        <View styles={styles.container}>
            <TextInput placeholder={'First Name'} maxLength={40} styles={styles.textInput}
            onChangeText={this.firstNameChangeHandler}/>
            <TextInput placeholder="Last Name" maxLength={40} styles={styles.textInput} />
            <TextInput placeholder="Username" maxLength={40} styles={styles.textInput}/>
            <TextInput placeholder="Display Name" maxLength={40} styles={styles.textInput} />
            <TextInput placeholder="Email" maxLength={40} styles={styles.textInput} />
            <TextInput placeholder="Password" maxLength={40} styles={styles.textInput} />
            <TextInput placeholder="Confirm Password" maxLength={40} styles={styles.textInput} />
            <View styles={styles.buttons}>
                <Button rounded>
                    <Text>Submit </Text>
                </Button>

            </View>


        </View>


    );


}


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttons:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between'

    },
    textInput: {
        width: 200,
        borderColor: black,
        borderWidth: 1,
        margin: 10

    }


})


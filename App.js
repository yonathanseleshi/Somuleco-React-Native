/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, DrawerLayoutAndroid} from 'react-native';
import {connect} from 'react-redux';
import {Realm} from 'realm';
import {userAuthenticated, userLoggedOut} from './store/actions/actionIndex'

import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import SideMenu from 'react-native-side-menu';
import {LearningFeed} from './components/authenticated/LearningFeed'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {

  state = {

      authenticated: null,
      realm: null
  };



     navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
    );

    /*
    var iosDrawer = (

        <View style={{flex: 1, backgroundColor: '#fff'}}>

            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}> IOS Drawer!</Text>
        </View>

    );

    var androidDrawer = (



        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>

            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
            </View>

        </DrawerLayoutAndroid>


    );

    const Drawer = Platform.select({

        ios: () => iosDrawer,
        android: () => androidDrawer


    })


     */
     renderDrawer = () => {
        return (
            <View>
                <Text>I am in the drawer!</Text>
            </View>
        );
    };


     authenticateUser = () => {

            this.props.onAuthenticated()


     }

     logOut = () => {


         this.props.onLogOut()
     }


    render(){




    return (



        <View style={{flex: 1}}>

            <DrawerLayout
                drawerWidth={200}
                drawerPosition={DrawerLayout.positions.LEFT}
                drawerType='front'
                drawerBackgroundColor="#ddd"
                renderNavigationView={this.renderDrawer}>
                <View>
                    <Text>
                        Hello, it's me
                    </Text>
                </View>
            </DrawerLayout>
        </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => {

    return {

        isAuthenticated: state.authenticatedUser.isAuthenticated
    };

};

const mapDispatchToProps = (dispatch) => {

        return {

            onAuthenticated: () => dispatch(userAuthenticated()),
            onLogOut: ()=> dispatch(userLoggedOut())
        }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'


class Header extends Component {
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>Awesome!!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingBottom: 8,
        backgroundColor: 'green',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text:{
        backgroundColor: 'yellow',
    }

});

export default Header;

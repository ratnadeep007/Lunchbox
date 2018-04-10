import React from "react";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = new StyleSheet.create({
    style: {
        fontSize: 20
    }
});

class Display extends React.Component {
    render(){
        if(this.props.icon) {
            return (
                <Icon onPress={() => this.props.navigation.navigate('DrawerToggle')} style={styles.style} name={this.props.icon} />
            )
        }
        return (
            <Text style={styles.style} >{this.props.text}</Text>
        )
    }
}

export default Display;
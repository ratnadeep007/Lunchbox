import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";

import Display from '../components/Display';
import ListView from './ListView';

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'pink',
    }
})

export class HomeScreen extends React.Component {
    render() {
        const data = [
            {
                id: '1',
                name: 'Food 1',
                description: 'This is description',
            },
            {
                id: '2',
                name: 'Food 2',
                description: 'This is description',
            },
            {
                id: '3',
                name: 'Food 3',
                description: 'This is description',
            },
            {
                id: '4',
                name: 'Food 4',
                description: 'This is description',
            },
            {
                id: '5',
                name: 'Food 5',
                description: 'This is description',
            },
        ]
        
        return (
            <View style={styles.home}>
                <Header
                    leftComponent={<Display icon='navicon' navigation={this.props.navigation} />}
                    centerComponent={<Display text='Lunchbox' />}
                    rightComponent={<Display icon='home' />}
                />
                <ListView data={data}/>
            </View>
        )
    }
}

export default HomeScreen
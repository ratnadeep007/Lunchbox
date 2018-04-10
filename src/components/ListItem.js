import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

class ListItem extends React.Component {
    render() {
        return (
            <Card 
                title={this.props.data.name}
                image={require('../images/image1.jpg')}
            >
                <Text>{this.props.data.description}</Text>
            </Card>
        )
    }
}

export default ListItem;
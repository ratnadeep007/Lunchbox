import React from "react";
import { ScrollView, View } from "react-native";
import { Card } from "react-native-elements";

import ListItem from '../components/ListItem';

class ListView extends React.Component {    
    render(){
        return (
            <ScrollView>
               {this.props.data.map((data) => (
                   <ListItem key={data.id} data={data} />
               ))}
            </ScrollView>
        )
    }
}

export default ListView;
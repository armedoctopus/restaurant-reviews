import * as React from 'react';
import { Text, View } from 'react-native';

class SearchScreen extends React.Component {
    public static navigationOptions = {
        title: 'Search'
    };

    public render(): React.ReactNode {
        return (
            <View>
                <Text>Search Screen</Text>
            </View>
        );
    }
}

export default SearchScreen;

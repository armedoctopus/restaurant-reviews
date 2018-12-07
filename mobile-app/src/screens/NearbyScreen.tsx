import * as React from 'react';
import { Text, View } from 'react-native';

class NearbyScreen extends React.Component {
    public static navigationOptions = {
        title: 'Nearby'
    };

    public render(): React.ReactNode {
        return (
            <View>
                <Text>Nearby Screen</Text>
            </View>
        );
    }
}

export default NearbyScreen;

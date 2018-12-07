import * as React from 'react';
import { Text, View } from 'react-native';

class UserScreen extends React.Component {
    public static navigationOptions = {
        title: 'Me'
    };

    public render(): React.ReactNode {
        return (
            <View>
                <Text>User Screen</Text>
            </View>
        );
    }
}

export default UserScreen;

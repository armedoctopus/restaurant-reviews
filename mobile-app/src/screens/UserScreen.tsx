import { withAuthenticator } from 'aws-amplify-react-native';
import * as React from 'react';

import UserDisplay from './user/UserDisplay';

const AuthenticatedUserDisplay = withAuthenticator(UserDisplay);

class UserScreen extends React.Component {
    public static navigationOptions = {
        title: 'Me'
    };

    public render(): React.ReactNode {
        return (
            <AuthenticatedUserDisplay/>
        );
    }
}

export default UserScreen;

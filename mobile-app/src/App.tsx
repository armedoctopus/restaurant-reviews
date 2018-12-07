import { AppLoading, Font } from 'expo';
import * as React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './navigation/AppNavigator';

interface IAppProps {
    skipLoadingScreen: boolean;
}

interface IAppState {
    isLoadingComplete: boolean;
}

class App extends React.Component<IAppProps,IAppState> {
    public state = {
        isLoadingComplete: false
    };

    public render() {
        const AppContainer = createAppContainer(AppNavigator);
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onError={this.handleLoadingError}
                    onFinish={this.handleFinishLoading} />
            );
        } else {
            return (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <AppContainer />
                </View>
            );
        }
    }

    private loadResourcesAsync = async(): Promise<void> => {
        return Font.loadAsync({
            'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf')
        });
    }

    private handleLoadingError = (error: Error) => {
        // no-console is set normally, and I want to keep it that way
        /* tslint:disable */ console.warn(error); /* tslint:enable */
    }

    private handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    }

}

export default App;

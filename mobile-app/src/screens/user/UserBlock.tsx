import { Ionicons } from '@expo/vector-icons';
import { API, graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react-native';
import * as React from 'react';
import { ActivityIndicator, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';
import { ConsoleLogger } from '@aws-amplify/core';

const styles = StyleSheet.create({
    innerProfile: {
        height: '100%',
        width: '30%'
    } as ViewStyle,
    innerTitle: {
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly',
        width: '70%'
    } as ViewStyle,
    name: {
        color: 'white',
        fontSize: 24
    } as TextStyle,
    nameBlock: {
        flex: 1,
        height: '50%',
        justifyContent: 'flex-end',
        width: '100%'
    } as ViewStyle,
    outer: {
        backgroundColor: Colors.palette.primary[2],
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%'
    } as ViewStyle,
    outerCentered: {
        alignItems: 'center',
        backgroundColor: Colors.palette.primary[3],
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    } as ViewStyle,
    statsBlock: {
        height: '50%',
        width: '100%'
    } as ViewStyle
});

interface IUserBlockProps {
    loading?: boolean;
    errors?: string[];
    name?: string | null;
    updateName?: (name: string) => Promise<boolean>;
}

interface IUserBlockState {
    name: string;
}

class UserBlock extends React.Component<IUserBlockProps, IUserBlockState> {
    public state: IUserBlockState = {
        name: this.props.name || ''
    };

    public render() {
        if (this.props.loading) {
            return (
                <View style={styles.outerCentered}>
                    <ActivityIndicator size="large" color={Colors.palette.tertiary[2]}/>
                </View>
            );
        }

        if (this.props.errors && this.props.errors.length > 0) {
            return (
                <View style={styles.outerCentered}>
                    <Ionicons name="md-bug" size={48} color={Colors.palette.tertiary[2]}/>
                </View>
            );
        }

        return (
            <View style={styles.outer}>
                <View style={styles.innerProfile}>
                </View>
                <View style={styles.innerTitle}>
                    <View style={styles.nameBlock}>
                        <TextInput
                            autoCapitalize="words"
                            autoCorrect={false}
                            autoFocus={false}
                            blurOnSubmit={true}
                            clearButtonMode="while-editing"
                            keyboardType="default"
                            keyboardAppearance="light"
                            maxLength={48}
                            onChangeText={(text) => this.setState({ name: text })}
                            onEndEditing={() => this.submitName()}
                            placeholder="Your Name Here"
                            placeholderTextColor={Colors.palette.secondary[4]}
                            returnKeyType="done"
                            style={styles.name}
                            textContentType="name"
                            underlineColorAndroid={Colors.palette.secondary[4]}
                            value={this.state.name}
                        />
                    </View>
                    <View style={styles.statsBlock}>
                    </View>
                </View>
            </View>
        );
    }

    private async submitName() {
        if (!this.props.updateName) return;

        // TODO: Error handling for submission
        const result = await this.props.updateName(this.state.name);
        if (!result) {
            // Do a pop-up to alert that the submission failed

            // Then set the state back to the original
            this.setState({ name: this.props.name || '' });
        }
    }
}

interface IUserBlockQueryResponse {
    loading: boolean;
    data?: {
        me: {
            id: string;
            name: string | null;
        }
    };
    errors?: string[];
}

const UserBlockFunction = () => {
    const query = `{
        me { id name }
    }`;

    const updateNameMutation = async(name: string): Promise<boolean> => {
        try {
            const mutation = 'mutation UpdateUser($input: UserInput!) { updateUser(userInfo: $input) { id name } }';
            await API.graphql(graphqlOperation(mutation, { input: { name } }));
            return true;
        } catch (err) {
            return false;
        }
    };

    return (
        <Connect query={graphqlOperation(query)}>
            {(response: IUserBlockQueryResponse) => {
                if (response.loading) {
                    return (<UserBlock loading={response.loading}/>);
                } else if (response.data && response.data.me) {
                    return (<UserBlock key={response.data.me.id} name={response.data.me.name} updateName={updateNameMutation}/>);
                } else {
                    return (<UserBlock errors={response.errors}/>);
                }
            }}
        </Connect>
    );
};

export default UserBlockFunction;

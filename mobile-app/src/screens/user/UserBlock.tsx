import { Ionicons } from '@expo/vector-icons';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react-native';
import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../constants/Colors';

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
}

class UserBlock extends React.Component<IUserBlockProps, {}> {
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
                    <Ionicons name="bug" size={48} color={Colors.palette.tertiary[2]}/>
                </View>
            );
        }

        return (
            <View style={styles.outer}>
                <View style={styles.innerProfile}>
                </View>
                <View style={styles.innerTitle}>
                    <View style={styles.nameBlock}>
                        <Text style={styles.name}>{this.props.name || 'Unknown'}</Text>
                    </View>
                    <View style={styles.statsBlock}>
                    </View>
                </View>
            </View>
        );
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
    const query = `
    {
        me {
            id
            name
        }
    }
    `;
    return (
        <Connect query={graphqlOperation(query)}>
            {(response: IUserBlockQueryResponse) => {
                if (response.loading) {
                    return (<UserBlock loading={response.loading}/>);
                } else if (response.data && response.data.me) {
                    return (<UserBlock name={response.data.me.name}/>);
                } else {
                    return (<UserBlock errors={response.errors}/>);
                }
            }}
        </Connect>
    );
};

export default UserBlockFunction;

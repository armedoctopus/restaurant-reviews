import { API, Auth, graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react-native';
import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
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
    nameBlock: {
        height: '50%',
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
    statsBlock: {
        height: '50%',
        width: '100%'
    } as ViewStyle
});

interface IUserBlockProps {
    loading?: boolean;
    errors?: string[];
    name?: string;
}

class UserBlock extends React.Component<IUserBlockProps, {}> {
    public render() {
        return (
            <View style={styles.outer}>
                <View style={styles.innerProfile}>
                </View>
                <View style={styles.innerTitle}>
                    <View style={styles.nameBlock}>
                        <Text>
                            {this.props.loading ? 'Loading...' : this.props.name || 'undefined'}
                        </Text>
                    </View>
                    <View style={styles.statsBlock}>
                        <Text>{this.props.errors && `Errors = ${this.props.errors.length}`}</Text>
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
            name?: string;
        }
    };
    errors: string[];
}
const UserBlockFunction = () => {
    return (
        <Connect query={graphqlOperation('{ me { id name } }')}>
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

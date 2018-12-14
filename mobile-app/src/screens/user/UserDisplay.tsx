import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../../constants/Layout';
import UserBlock from './UserBlock';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%'
    },
    userBlock: {
        height: Math.floor(Layout.window.width * 0.25),
        width: '100%'
    }
});

export default class UserDisplay extends React.Component {
    public render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.userBlock}>
                    <UserBlock/>
                </View>
            </View>
        );
    }
}

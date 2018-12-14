import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    innerProfile: {
        height: '100%',
        width: '25%'
    } as ViewStyle,
    innerTitle: {
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly',
        width: '75%'
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

export default class UserBlock extends React.Component<{}, {}> {
    public render() {
        return (
            <View style={styles.outer}>
                <View style={styles.innerProfile}>
                </View>
                <View style={styles.innerTitle}>
                    <View style={styles.nameBlock}></View>
                    <View style={styles.statsBlock}></View>
                </View>
            </View>
        );
    }
}

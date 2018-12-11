import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100vw'
    },
    userBlock: {
        backgroundColor: Colors.palette.primary[2],
        height: '25vw',
        width: '100vw'
    }
});

export default class UserDisplay extends React.Component {
    public render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.userBlock}>

                </View>
            </View>
        );
    }
}

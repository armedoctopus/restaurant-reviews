import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default {
    isSmallDevice: window.width < 375,
    window
};

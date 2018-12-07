import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

interface ITabBarIconProps {
    focused: boolean;
    name: string;
}

class TabBarIcon extends React.Component<ITabBarIconProps, {}> {
    public render(): React.ReactNode {
        const color: string = this.props.focused ? Colors.tabBar.selected : Colors.tabBar.foreground;
        return (
            <Ionicons
                name={this.props.name}
                size={26}
                style={{ marginBottom: -3 }}
                color={color}/>
        );
    }
}

export default TabBarIcon;

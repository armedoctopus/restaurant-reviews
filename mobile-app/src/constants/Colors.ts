const palette = {
    primary: [
        '#AA3939',
        '#FFAAAA',
        '#D46A6A',
        '#801515',
        '#550000'
    ],
    secondary: [
        '#226666',
        '#669999',
        '#407F7F',
        '#0D4D4D',
        '#003333'
    ],
    tertiary: [
        '#7B9F35',
        '#D4EE9F',
        '#A5C663',
        '#567714',
        '#354F00'
    ]
};

export default {
    palette,
    tabBar: {
        background: palette.primary[2],
        foreground: palette.secondary[0],
        selected: '#cccccc'
    }
};

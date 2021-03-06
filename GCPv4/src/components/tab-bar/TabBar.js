import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 }
});

const S = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 55,
        elevation:5,
    },
    tabButton: { flex: 1, justifyContent: "center", alignItems: "center", borderRightWidth: 0.5, borderLeftWidth: 0.5, borderColor: '#ECE7E7', },
    spotLight: {
        width: tabWidth,
        height: "100%",
        backgroundColor: "rgba(103,215,129,1)",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    }
});

const Scaler = posed.View({
    active: { scale: 1.25 },
    inactive: { scale: 1 }
});

const TabBar = props => {
    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={S.container}>
            <View style={StyleSheet.absoluteFillObject}>
                <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`} />
            </View>
            {routes.map((route, routeIndex) => {
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? "white" : "#1281D6";

                return (
                    <TouchableOpacity
                        key={routeIndex}
                        style={S.tabButton}
                        onPress={() => {
                            onTabPress({ route });
                        }}
                        onLongPress={() => {
                            onTabLongPress({ route });
                        }}
                        accessibilityLabel={getAccessibilityLabel({ route })}
                    >
                        <Scaler style={S.scaler} pose={isRouteActive ? "active" : "inactive"}>
                            {renderIcon({ route, focused: isRouteActive, tintColor })}
                        </Scaler>

                        <Text style={{ fontSize: 13, color: tintColor, marginTop: 3 }}>{getLabelText({ route })}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;
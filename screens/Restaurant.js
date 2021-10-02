import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Animated,
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { icons, COLORS, SIZES, FONTS } from "../constants";

///1.16 stop
const Restaurant = ({ route, navigation }) => {
    const [restaurant, setRestaurant] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        let { item, currentLocation } = route.params;
        setRestaurant(item);
        setCurrentLocation(currentLocation);
    }, []);

    function renderHeader() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        paddingVertical: 15,

                        justifyContent: "center",
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name */}
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3,
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{restaurant?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderFoodInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            >
                {restaurant?.menu.map((item, index) => (
                    <View
                        key={`menu-${index}`}
                        style={{ alignItems: "center" }}
                    >
                        <View style={{ height: SIZES.height * 0.35 }}>
                            {/* Food image*/}
                            <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={{ width: SIZES.width, height: "100%" }}
                            />
                            {/* Quantity section */}
                            <View
                                style={{
                                    position: "absolute",
                                    bottom: -20,
                                    width: SIZES.width,
                                    height: 50,
                                    justifyContent: "center",
                                    flexDirection: "row",
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25,
                                    }}
                                >
                                    <Text styles={{ ...FONTS.body1 }}>-</Text>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text styles={{ ...FONTS.h3 }}>5</Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25,
                                    }}
                                >
                                    <Text styles={{ ...FONTS.body1 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Name & Description */}
                        <View
                            style={{
                                width: SIZES.width,

                                alignItems: "center",
                                marginTop: 35,
                                paddingHorizontal: SIZES.padding * 2,
                            }}
                        >
                            <Text
                                styles={{
                                    marginVertical: 15,
                                    textAlign: "center",
                                    ...FONTS.h2,
                                }}
                            >
                                {item.name} - {item.price.toFixed(2)}
                            </Text>

                            <Text
                                styles={{
                                    marginVertical: 15,
                                    textAlign: "center",
                                    ...FONTS.body3,
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>

                        {/* Calories */}
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Image
                                source={icons.fire}
                                style={{
                                    height: 20,
                                    width: 20,
                                    marginRight: 12,
                                }}
                            />
                            <Text
                                style={{
                                    ...FONTS.body3,
                                    color: COLORS.darkgray,
                                }}
                            >
                                {item.calories.toFixed(2)} cal
                            </Text>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
        </SafeAreaView>
    );
};

export default Restaurant;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
});

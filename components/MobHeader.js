import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const MobHeader = ({ currentLocation, setCurrentLocation }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 50,
                paddingTop: 13,
                paddingLeft: 12,
            }}
        >
            <TouchableOpacity
                styles={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: "center",
                }}
            >
                <Image
                    source={icons.nearby}
                    resizeMode="contain"
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        width: "70%",
                        height: "100%",
                        backgroundColor: COLORS.lightGray3,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: SIZES.radius,
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>
                        {currentLocation.streetName}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: SIZES.padding2,
                    justifyContent: "center",
                }}
            >
                <Image
                    source={icons.basket}
                    resizeMode="contain"
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default MobHeader;

const styles = StyleSheet.create({});

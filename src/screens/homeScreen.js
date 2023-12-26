import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from "../utils/routes";

const HomeScreen = () => {

    const navigation = useNavigation();

    const hundleClick = () => {
        navigation.navigate(routes.playerSelectionScreen)
        //setOrientation("paysage")
    }


    return (
        <View>
            <Text>Page 1</Text>
            <Button
                title="Page 2"
                onPress={() =>hundleClick()}
            />
        </View>
    );
};

export default HomeScreen;
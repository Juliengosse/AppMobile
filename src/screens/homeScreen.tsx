import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { routes } from "../utils/routes";

const HomeScreen = ({ navigation } : any) => {

    const hundleClick = () => {
        navigation.navigate(routes.playerSelectionScreen);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>On se la colle ouuuuuu ?</Text>
            <Button
                title="Jouez !"
                buttonStyle={{
                    backgroundColor: 'black',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    position: "absolute",
                    bottom: 300,
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress = {hundleClick}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
      top: 200,
      fontWeight: 'bold', 
      fontSize: 30,
    }
})

export default HomeScreen;
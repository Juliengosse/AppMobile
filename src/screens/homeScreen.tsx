import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { routes } from "../utils/routes";
import { styles } from './../utils/style';


const HomeScreen = ({ navigation } : any) => {

    const hundleClick = () => {
        navigation.navigate(routes.playerSelectionScreen);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>On se la colle ouuuuuu ?</Text>
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

export default HomeScreen;
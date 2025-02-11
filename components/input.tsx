import { TextInput, StyleSheet } from "react-native";
import React from "react";

interface InputProps {
    nbInput: number;
    value: string;
    onChangeText: (text: string) => void;
}

export default function Input({ nbInput, value, onChangeText }: InputProps) {
    return (
        <TextInput 
            placeholder={`Joueur ${nbInput}`}
            placeholderTextColor='#fff'
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        color: '#fff',
        textAlign: 'center',
    },
});

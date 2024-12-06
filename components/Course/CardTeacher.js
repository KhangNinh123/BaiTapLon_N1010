import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
const CardTeacher = ({ data }) => {
    return (
        <View style={styles.card}>
<<<<<<< HEAD
            <Image source={{ uri: data.avartar }} style={styles.image} />
=======
<<<<<<< HEAD
            <Image source={{ uri: data.avartar }} style={styles.image} />
=======
            <Image source={{ uri: data.imageUrl }} style={styles.image} />
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.certificate}>{data.certificate}</Text>
                    <View style={styles.rate}><Feather name="star" size={20} color="#F0B749" />
                        <Text>{data.rate} <Text style={styles.grey}>({data.totalRate})</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        padding: 10,
        backgroundColor: 'white',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10
    },
    content: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    certificate: {
        fontSize: 14,
        color: '#555',
    },
    grey: {
        color: 'grey'
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center', gap: 10
    }
});
export default CardTeacher;
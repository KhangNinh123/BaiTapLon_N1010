<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardTeacher from '../Course/CardTeacher';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from '../../redux/slices/userSlice';
const HorizontalTeacher = ({ navigation, data }) => {
    const dispatch = useDispatch();
    const { userDetails, loading, error } = useSelector((state) => state.user);
    const handleGetTeacherDetails = async (userId) => {
        try {
            const result = await dispatch(fetchUserById(userId)).unwrap(); // Lấy dữ liệu trả về trực tiếp
            // console.log(result.data); // Kiểm tra dữ liệu trả về
            navigation.navigate('TeacherProfile', { user: result.data }); // Chuyển tới trang với dữ liệu người dùng
        } catch (error) {
            console.log('Error fetching teacher details:', error);
        }
    };

<<<<<<< HEAD
=======
=======
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardTeacher from '../Course/CardTeacher';
const HorizontalTeacher = ({ navigation, data }) => {
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
<<<<<<< HEAD
                    <TouchableOpacity onPress={() => { handleGetTeacherDetails(item.userId) }} key={index} style={styles.itemContainer}>
=======
<<<<<<< HEAD
                    <TouchableOpacity onPress={() => { handleGetTeacherDetails(item.userId) }} key={index} style={styles.itemContainer}>
=======
                    <TouchableOpacity onPress={() => navigation.navigate("TeacherProfile")} key={index} style={styles.itemContainer}>
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
                        <CardTeacher data={item} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
export default HorizontalTeacher;

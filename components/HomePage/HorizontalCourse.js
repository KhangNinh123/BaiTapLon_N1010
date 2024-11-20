import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardCourse from '../Course/CardCourse';
import CardTeacher from '../Course/CardTeacher';
const HorizontalCourse = ({ navigation, data }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")} key={index} style={styles.itemContainer}>
                        <CardCourse data={item} />
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
export default HorizontalCourse;

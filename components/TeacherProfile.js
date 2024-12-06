import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';
import TeacherProfileNavigator from '../navigators/TeacherProfileNavigator';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
const TeacherProfile = ({ navigation, route }) => {
    const { user } = route.params || {}; // Lấy dữ liệu user từ route.params

    // Xử lý trường hợp user không tồn tại
    if (!user) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>User data not available</Text>
            </SafeAreaView>
        );
    }
<<<<<<< HEAD
=======
=======
const TeacherProfile = () => {
    const data = {
        titleBanner: "Courses that boost your career!",
    };
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
<<<<<<< HEAD
                <AntDesign onPress={() => navigation.goBack()} name="left" size={24} color="black" />
=======
<<<<<<< HEAD
                <AntDesign onPress={() => navigation.goBack()} name="left" size={24} color="black" />
=======
                <AntDesign name="left" size={24} color="black" />
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
                <Text style={styles.title}>Teacher's profile</Text>
                <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.background} source={{ uri: 'https://dulichminhanh.com.vn/wp-content/uploads/2024/09/dai-lo-ngo-dong.jpg' }} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
                <Image style={styles.avatar} source={{ uri: user.avartar || 'https://example.com/default-avatar.png' }} />
            </View>
            <View style={styles.nameUser}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{user.name}</Text>
                <Text style={{ fontSize: 18, color: 'grey' }}>{user.certificate}</Text>
<<<<<<< HEAD
=======
=======
                <Image style={styles.avatar} source={{ uri: 'https://cdn.popsww.com/blog/sites/2/2021/12/naruto-sasuke.jpg' }} />
            </View>
            <View style={styles.nameUser}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Uchiha Sasuke</Text>
                <Text style={{ fontSize: 18, color: 'grey' }}>UX/UI Designer</Text>
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
                <View style={styles.location}>
                    <Ionicons name="location-outline" size={24} color="grey" />
                    <Text style={{ fontSize: 14, color: 'grey' }}>New York - 09:30 AM</Text>
                </View>
            </View>
            <View style={styles.navigatorContainer}>
                <TeacherProfileNavigator />
            </View>
        </SafeAreaView>
    );
};

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
<<<<<<< HEAD
        paddingTop: 30
=======
<<<<<<< HEAD
        paddingTop: 30
=======
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    },
    bannerContainer: {
        marginBottom: 20, // Thêm khoảng cách giữa banner và navigator
    },
    navigatorContainer: {
        flex: 1, // Đảm bảo navigator chiếm toàn bộ không gian còn lại
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    background: {
        height: 200,
        width: '95%',
        borderRadius: 10,
    },
    avatar: {
        position: 'absolute',
        bottom: -50,
        left: '36%',
        width: 120,
        height: 120,
<<<<<<< HEAD
        borderRadius: 100,
=======
<<<<<<< HEAD
        borderRadius: 100,
=======
        borderRadius: '70%',
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
        borderWidth: 2,
        borderColor: 'white',
    },
    nameUser: {
        marginTop: 50,
        alignItems: 'center',
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header: {
        paddingHorizontal: 10,
        height: 50,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default TeacherProfile;

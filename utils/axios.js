import axios from 'axios';
import { Alert } from 'react-native'; // Sử dụng để thông báo lỗi nếu cần
// import { REACT_APP_BACKEND_URL } from '@env';
const instance = axios.create({
<<<<<<< HEAD
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080', // Dùng giá trị mặc định nếu không có biến môi trường
    timeout: 3000, // Đặt timeout 10 giây
=======
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://192.168.2.9:8080', // Dùng giá trị mặc định nếu không có biến môi trường
    timeout: 10000, // Đặt timeout 10 giây
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
});

// Xử lý phản hồi thành công
instance.interceptors.response.use(
    (response) => {
        return response.data; // Trả về chỉ `data` từ response
    },
    (error) => {
        // Xử lý lỗi tại đây
        if (error.response) {
            // Lỗi từ server (4xx, 5xx)
            console.error('Server error:', error.response.data);
        } else if (error.request) {
            // Không nhận được phản hồi từ server
            console.error('No response from server:', error.request);
            Alert.alert('Error', 'No response from server.');
        } else {
            // Lỗi khác
            console.error('Error setting up request:', error.message);
        }

        // Ném lỗi tiếp tục để xử lý tại nơi gọi
        return Promise.reject(error);
    }
);

export default instance;

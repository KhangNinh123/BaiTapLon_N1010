import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Màn hình chi tiết sản phẩm
const ProductDetails = () => {
  return (
    <View style={styles.productDetails}>
      <Image
        source={{ uri: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png' }} // Đường dẫn đến hình ảnh với kích thước 300x360
        style={styles.productImage}
      />
      <Text style={styles.productName}>Điện Thoại Iphone 16 pro Max</Text>
      <Text style={styles.productPrice}>Giá: 41,790,000₫</Text>
      <Text>Hàng chính hãng</Text>
    </View>
  );
};

// Component chọn màu
const ColorPicker = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <View style={styles.colorPicker}>
      <Text style={styles.colorPickerText}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorOptions}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorOption,
              {
                backgroundColor: color,
                borderWidth: selectedColor === color ? 2 : 0,
                borderColor: selectedColor === color ? '#000' : 'transparent',
              },
            ]}
            onPress={() => onSelectColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

// Component giỏ hàng
const Cart = ({ selectedColor }) => {
  return (
    <View style={styles.cart}>
      <Text style={styles.cartTitle}>Giỏ Hàng</Text>
      <Text>Bạn đã chọn màu: <Text style={{ color: selectedColor }}>{selectedColor}</Text></Text>
      <TouchableOpacity style={styles.purchaseButton}>
        <Text style={styles.buttonText}>Thanh Toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [inCart, setInCart] = useState(false);

  const colors = ['#00AEEF', '#FF0000', '#0000FF']; // Màu sắc sản phẩm

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <View style={styles.container}>
      {!inCart ? (
        <>
          <ProductDetails />
          <ColorPicker
            colors={colors}
            selectedColor={selectedColor}
            onSelectColor={handleColorSelect}
          />
          <TouchableOpacity
            style={[
              styles.addToCartButton,
              { backgroundColor: selectedColor ? '#FF0000' : '#DDD' },
            ]}
            onPress={handleAddToCart}
            disabled={!selectedColor}
          >
            <Text style={styles.buttonText}>
              {selectedColor ? 'Chọn Mua' : 'Chọn Màu Sắc'}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <Cart selectedColor={selectedColor} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  productDetails: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 300, // Chiều rộng của hình ảnh
    height: 400, // Chiều cao của hình ảnh
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  colorPicker: {
    marginBottom: 20,
  },
  colorPickerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorOption: {
    width: 50, // Kích thước của ô chọn màu (hình vuông)
    height: 50, // Kích thước của ô chọn màu (hình vuông)
    margin: 5,
    borderRadius: 0, // Không có bo tròn góc để tạo thành hình vuông
  },
  addToCartButton: {
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  cart: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  purchaseButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default App;

import { useState } from 'react';

// Hook nhận vào key (tên lưu trong localStorage) và initialValue (giá trị mặc định)
const useLocalStorage = (key, initialValue) => {
    // 1. Khởi tạo state với lazy initialization (chỉ chạy 1 lần khi mount)
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Lấy item từ localStorage bằng key
            const item = window.localStorage.getItem(key);
            // Nếu có thì parse JSON, nếu không thì dùng initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // 2. Tạo hàm setValue mới bọc logic lưu vào localStorage
    const setValue = (value) => {
        try {
            // Cho phép value là một hàm (giống useState chuẩn)
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            // Lưu vào state của React
            setStoredValue(valueToStore);

            // Lưu vào localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    // 3. Trả về giống hệt useState: [giá_trị, hàm_set]
    return [storedValue, setValue];
};

export default useLocalStorage;
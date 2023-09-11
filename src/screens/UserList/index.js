import { Text, View,FlatList,StyleSheet,Button,Modal,Pressable,TextInput, Alert } from "react-native";
import { useState,useEffect } from 'react';
import { API_USER } from "../../helpers/api";
import { useIsFocused } from '@react-navigation/native';
const UserList= (props) =>{
  const navigation=props.navigation;
    // khai báo 1 biến trạng thái hiển thị
    // sử dụng ở useEffect để lắng nghe việc cập nhật ds
    const isFocused = useIsFocused();

    const [list, setList] = useState([]);
    const[isLoading,setLoading]=useState(true);
    const getList = () => {
        fetch(API_USER)
            .then((res) => res.json()) // khi api call thành công thì chạy vào then
            // kết quả của lần then trước là res.json() là tham số data của then tiếp theo
            .then((data) => {setList(data); setLoading(false);})
            .catch((err) => console.log(err)) // khi api call thất bại thì chạy vào catch
    };

    useEffect(() => {
        // Khi component vừa render xong thì sẽ call API lấy dữ liệu về
        getList();
    }, [isFocused]); // Khi màn hình được quay lại thì sẽ gọi danh sách mới

    const onDelete = (deleteId) => {
        // Gọi API API_USER + 1 để xoá phần tử có id 1
        // phương thức là DELETE
        Alert.alert(
          'Bạn có muốn xóa không ?',
          'yes/no',
          [{
            text:'Yes',
            onPress : () =>{
              fetch(
                API_USER + '/' + deleteId,
                {method: 'DELETE'}
            ).then((res) => getList())
            .catch((err) => console.log(err));
            }
          },
          {
            text:'No',
            onPress: () =>{}
          } 
        ]
          )
    };

    const onEdit = (editId) => {
        // Call API lấy dữ liệu chi tiết ở đây rồi gửi sang
        fetch(API_USER + '/' + editId)
        .then((res) => res.json())
        .then(data => navigation.navigate('Form', {
            editData: data
        }));
    };
    return (
        <View>
          <Text >Trang Danh Sách</Text>
        <Button
                title='Thêm mới'
                onPress={() => navigation.navigate('Form')}
            />
            {isLoading
                ? <Text >Loading...</Text>
                :
           <FlatList
          data={list}
          renderItem={({item}) => 
          <View style={styles.item}>
           <Text >ID: {item.id}</Text>
           <Text >Tên: {item.name}</Text>
           <Text >Địa Chỉ: {item.address}</Text>
           <Text >Số Điện Thoại: {item.phone}</Text>
           <Text >Trạng Thái: {item.trangthai}</Text>
           <View>
              <Pressable style={styles.btn} onPress={() => onEdit(item.id)}><Text >Sửa</Text></Pressable>
              <Pressable style={styles.btn} onPress={() => onDelete(item.id)}><Text >Xóa</Text></Pressable>
           </View>
           </View>} 
          keyExtractor={(item,index) => index}
           />}
           </View>
          
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      marginLeft:20,
      fontSize:20,
      color:'black'
    },
    btn:{
      backgroundColor:'yellow',
      width:30,
      height:20,
      alignItems:'center',
      alignSelf:'flex-end',
      borderWidth: 1,
      marginBottom:10
    },
    item:{
      borderWidth: 1,
    },
    btn2:{
       display: "flex"
    }
  });
export default UserList;
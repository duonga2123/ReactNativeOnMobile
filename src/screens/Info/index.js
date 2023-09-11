import { Text, View,Image, Button,StyleSheet,Pressable} from "react-native";
const Info= (props) =>{
    const navigation=props.navigation;
    const chuyenMH=(ten_mh, data)=>{
        navigation.navigate(ten_mh, data);
    }
    return(
        <View  >
            <Text> TRANG THÔNG TIN</Text>
            <Text>Họ và tên: Nguyễn Đặng Thành Dương</Text>
            <Text>MSV: PH25724</Text>
           
            <Button title="Vào Trang Danh Sách" onPress={() => chuyenMH('UserList',{id: 234})}>
            </Button>
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
      fontSize:20,
      color:'black'
    },
    text1:{
      fontSize:20,
      color:'red'
    }
  });
export default Info;
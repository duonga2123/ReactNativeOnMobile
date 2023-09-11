import { View,Pressable,Text,StyleSheet, Image, Button} from "react-native";

const Home=(props) =>{
    // trong rpops sẽ có navigation được nhận từ stack.screen ở App.js
    const navigation=props.navigation;
    const chuyenMH=(ten_mh, data)=>{
        navigation.navigate(ten_mh, data);
    }
    return(
        <View >
           
            <Button title="Thông tin" onPress={() => chuyenMH('Info',{id: 123})}>
            </Button>
            <Text></Text>
            <Button title="Vào Trang Danh Sách" onPress={() => chuyenMH('UserList',{id: 234})}>
            </Button>
        </View>
    )
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
    },
    btn:{
      marginBottom:20,
    }
  });
export default Home;
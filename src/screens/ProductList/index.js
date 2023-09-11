import { 
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from "react-native";
const ProductList =(props) =>{
    const productlist =props.data;
    return (<SafeAreaView style={styles.safeView}>
        <FlatList
         data={productlist}
        renderItem={({item}) =>(
        <View>
            <Text>{item.name}</Text> 
        <Text>{item.mota}</Text>
        </View>)}
        keyExtractor={(item) => item.id} 
        />
    
    </SafeAreaView>);
};

export default ProductList;

const styles=StyleSheet.create({
    safeView:{
        flex:1
    }
    });
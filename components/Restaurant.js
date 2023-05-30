import { Pressable, View, Text, StyleSheet} from "react-native";
import {Colours} from '../variables/colours.js';
function Restaurant({name, img}) {
    return <View style={styles.outerItem}>
        <Pressable android_ripple={{color: '#ccc'}} style={styles.button}>
            <View style={styles.innerItem}>
                <Text style={styles.title}>{name}</Text>
            </View>
        </Pressable>
    </View>
}

export default Restaurant;

const styles = StyleSheet.create({
    outerItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: Colours.secondaryColor,
        overflow: 'hidden'
    },
    button: {
        flex: 1
    },
    innerItem: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
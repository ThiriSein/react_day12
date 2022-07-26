
import { StyleSheet, View, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ManaD() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", backgroundColor: '#fff', borderRadius: 20, marginBottom: 20, }}>
          <Image
            source={require('../assets/pro.jpg')}
            style={{ width: 50, height: 40, margin: 10, }}
          />
          <View style={styles.column}>
            <Text> Mary</Text>
            <Text style={{ color: 'gray', }}> Manager </Text>
          </View>
          <Ionicons name="star-outline" size={22} style={{ margin: 10, paddingRight: 20, }} />
          <Ionicons name="call-outline" size={22} style={{ margin: 10, paddingRight: 10, }} />
        </View>

        <View style={{ flexDirection: "row", backgroundColor: '#fff', borderRadius: 20, marginBottom: 20, }}>
          <Image
            source={require('../assets/pro.jpg')}
            style={{ width: 50, height: 40, margin: 10, }}
          />
          <View style={styles.column}>
            <Text> Eric</Text>
            <Text style={{ color: 'gray', }}> Manager </Text>
          </View>
          <Ionicons name="star-outline" size={22} style={{ margin: 10, paddingRight: 20, }} />
          <Ionicons name="call-outline" size={22} style={{ margin: 10, paddingRight: 10, }} />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  column: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },
});

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { requireNativeComponent } from 'react-native';
var RNGoogleMap = requireNativeComponent('RNGoogleMap', null);

class MedMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNGoogleMap style={styles.map}/>
      </View>
    );

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    height: 300,
    margin: 40,
    borderWidth: 1,
    borderColor: '#000000',
  }
});

AppRegistry.registerComponent('MedMap', () => MedMap);

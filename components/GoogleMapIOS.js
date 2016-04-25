'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

import { requireNativeComponent } from 'react-native';
var RNGoogleMap = requireNativeComponent('RNGoogleMap', null);

var GoogleMapIOS = React.createClass({
  render() {
    return(
     <RNGoogleMap/>
    );
  }
});

var styles=StyleSheet.create({

});

module.exports=GoogleMapIOS;

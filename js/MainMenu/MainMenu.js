/**
 * Copyright (c) 2016-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroOmniLight,
  ViroScene,
  ViroText,
  Viro360Image,
} from 'react-viro';

var createReactClass = require('create-react-class');

var MainMenuScene = createReactClass({
  getInitialState() {
    return {

    };
  },
  render: function() {
    return (
     <ViroScene>

      <ViroOmniLight position={[0, 0, 0]} color="#ffffff"
        direction={[0,0, -1.0]} attenuationStartDistance={40} attenuationEndDistance={50} />

      <ViroText text="Hello World!" position={[0, 0, -2]} style={styles.helloWorldTextStyle} />

     </ViroScene>
    );
  },
});

var styles = StyleSheet.create({
 helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 25,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = MainMenuScene;
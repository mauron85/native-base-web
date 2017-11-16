'use strict';

/* @flow */
import PropTypes from 'prop-types';

import React from 'react';
import _ from 'lodash';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';


export default class Item extends NativeBaseComponent {
	static propTypes = {
        style : PropTypes.object,
        padder : PropTypes.bool
    }
	render() {
		return(
			<View style={{padding: (this.props.padder) ? this.getTheme().contentPadding : 0, flex: 1}} {...this.props}></View>
			);
	}
}

'use strict';

/* @flow */
import PropTypes from 'prop-types';

import React from 'react';
import Platform from '../../Utils/platform';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Text from '../Widgets/Text';
import View from '../Widgets/View';
import computeProps from '../../Utils/computeProps';

export default class Body extends NativeBaseComponent {

	static propTypes = {
		style : PropTypes.object
	}

	prepareRootProps() {

		var type = {
			flex: 1,
			color: this.getTheme().toolbarTextColor,
			fontSize: this.getTheme().titleFontSize,
			fontFamily: this.getTheme().btnFontFamily,
			fontWeight: (Platform.OS === 'ios') ? '500' : undefined,
			// TODO: alignItems should be aware of context
			// for example in ListItem it should flex-start
			// leaving unconfigured as with current version of native-base-web
			// overriding styles is pain in the ass
			// alignItems: 'center',
			alignSelf: 'center'
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);

	}

	render() {
		return(
			<View {...this.prepareRootProps()}>
				<Text>{this.props.children}</Text>
			</View>
		);
	}
}

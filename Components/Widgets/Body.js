'use strict';

/* @flow */
import PropTypes from 'prop-types';

import React from 'react';
import Platform from '../../Utils/platform';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Text from '../Widgets/Text';
import View from '../Widgets/View';
import computeProps from '../../Utils/computeProps';

const styles = {
	container: {
		alignSelf: 'center'
	}
};

export default class Body extends NativeBaseComponent {

	static propTypes = {
		style : PropTypes.object
	}

	prepareRootProps() {

		var type = {
			color: this.getTheme().toolbarTextColor,
			fontSize: this.getTheme().titleFontSize,
			fontFamily: this.getTheme().btnFontFamily,
			fontWeight: (Platform.OS === 'ios') ? '500' : undefined,
			alignSelf: (Platform.OS === 'ios' ) ? 'center' : 'flex-start'
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);

	}

	render() {
		return(
			<View style={styles.container}><Text {...this.prepareRootProps()}>{this.props.children}</Text></View>
			);
	}
}

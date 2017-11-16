'use strict';

/* @flow */
import PropTypes from 'prop-types';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class FooterTab extends NativeBaseComponent {

    static propTypes = {
        style : PropTypes.object
    }

    getInitialStyle() {
        return {
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: this.getTheme().footerDefaultBg
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle()
        };

        return computeProps(this.props, defaultProps);

    }

    render() {

        return(
            <View {...this.prepareRootProps()}>
                {this.props.children}
            </View>
        );
    }
}

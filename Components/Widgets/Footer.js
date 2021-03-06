'use strict';

/* @flow */
import PropTypes from 'prop-types';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Footer extends NativeBaseComponent {

    static propTypes = {
        style : PropTypes.object
    }

    getInitialStyle() {
        return {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: this.getTheme().footerHeight,
            paddingBottom: this.getTheme().footerPaddingBottom,
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

'use strict';

/* @flow */
import PropTypes from 'prop-types';

import React from 'react';
import Platform from '../../Utils/platform';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from './Button';
import View from './View';
import Title from './Title';
import InputGroup from './InputGroup';
import Subtitle from './Subtitle';
import _ from 'lodash';

export default class Header extends NativeBaseComponent {

    static propTypes = {
        searchBar : PropTypes.bool,
        rounded : PropTypes.bool,
        style : PropTypes.object
    }

    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingTop: (Platform.OS === 'ios' ) ? 0 : 0,
                //shadowColor: '#000',
                //shadowOffset: {width: 0, height: 2},
                //shadowOpacity: 0.1,
                //shadowRadius: 1.5,
                height: this.getTheme().toolbarHeight,
                //elevation: 3,
                position: 'fixed',
                top : 0,
                width : '100%',
                zIndex : 99
            },
            iosToolbarSearch: {
                backgroundColor: this.getTheme().toolbarInputColor,
                borderRadius: this.props.rounded ? 25 : 2,
                height: 30,
                borderColor: 'transparent',
                flex:1
            },
            androidToolbarSearch: {
                backgroundColor: '#fff',
                borderRadius: 2,
                borderColor: 'transparent',
                //elevation: 2,
                flex:1
            },
            toolbarButton: {
                paddingHorizontal: 15
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().navbar
        };

        return computeProps(this.props, defaultProps);

    }

    renderChildren() {
        return this.props.children;
    }


    render() {
        return(
            <View {...this.prepareRootProps()} >
            {this.renderChildren()}
            </View>
        );
    }
}

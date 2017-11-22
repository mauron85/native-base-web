/* @flow */
'use strict';
import PropTypes from 'prop-types';

import React from 'react';
import {Image, TouchableWithoutFeedback } from 'react-native';
import Platform from '../../Utils/platform';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Icon from './Icon';
import Text from './Text';
import View from './View';
import Button from './Button';
import Badge from './Badge';
import Thumbnail from './Thumbnail';
import CheckBox from './Checkbox';
import Radio from './Radio';
import InputGroup from './InputGroup';
import TouchableOpacityScrollable from './TouchableOpacityScrollable';
import _ from 'lodash';

export default class ListItemNB extends NativeBaseComponent {

    static propTypes = {
        style : PropTypes.object,
        header : PropTypes.bool,
        iconRight : PropTypes.bool,
        iconLeft : PropTypes.bool,
        button : PropTypes.bool,
        itemDivider : PropTypes.bool
    }

    getInitialStyle() {

        return {
            listItem: {
                borderBottomWidth: this.getTheme().borderWidth,
                marginLeft: 15,
                padding:  this.getTheme().listItemPadding,
                paddingLeft: 2,
                borderColor: this.getTheme().listBorderColor
            },
            listItemDivider: {
                borderBottomWidth: this.getTheme().borderWidth,
                padding: this.getTheme().listItemPadding,
                backgroundColor: this.getTheme().listDividerBg,
                flexDirection: 'row',
                borderColor: this.getTheme().listBorderColor
            },
            item: {
                flexDirection: 'row',
                alignItems: 'center',
            }
        }
    }

    prepareRootProps() {
        var defaultProps = {};

        if(this.props.itemDivider) {
            defaultProps = {
                style: this.getInitialStyle().listItemDivider
            };
        }
        else {
            defaultProps = {
                style: this.getInitialStyle().listItem
            };
        }

        return computeProps(this.props, defaultProps);
    }

    render() {
        return(
            <TouchableOpacityScrollable {...this.prepareRootProps()}>
                <View style={this.getInitialStyle().item}>
                    {this.props.children}
                </View>
            </TouchableOpacityScrollable>
        );
    }

}

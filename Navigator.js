import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import PostList from './components/PostList'
import Post from './components/Post'

import { StackNavigator } from 'react-navigation'

export const Navigator = new StackNavigator({
    PostList: { screen: PostList },
    Post: { screen: Post },
},{
    initialRouteName: 'PostList',
});

class Nav extends Component {
    render() {
        return (
            <Navigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.navigation,
            })} />
        )
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation,
});у

export default connect(mapStateToProps)(Nav)
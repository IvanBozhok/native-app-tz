import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';

import PostList from './components/PostList';
import Post from './components/Post';

export default class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
                <Router>
                    <Route name="post-list" component={PostList} initial={true} hideNavBar={true} title="post-list"/>
                    <Route name="post" component={Post} title="post"/>
                </Router>
            </View>
        );
    }
}

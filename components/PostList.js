import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-material-design';
import { getPostList } from "../action";

class PostList extends Component {
    componentWillMount() {
        this.props.onGetPostList();
    }
    render() {
        console.log('>>>>>', this.props);
        return (
            <View>
                <Card>
                    <Card.Media
                        image={<Image source={require('')} />}
                        overlay
                    />
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button value="ACTION" />
                    </Card.Actions>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

//---------- container Smart ------------------

function mapStateProps(state) {
    return {
        menu: state.menu,
        order: state.order
    }
}

function matchDispatchProps(dispatch) {
    return bindActionCreators({
        onGetPostList: getPostList,
    }, dispatch);

}


export default connect(mapStateProps, matchDispatchProps)(PostList);
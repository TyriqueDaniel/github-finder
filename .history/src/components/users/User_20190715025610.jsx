import React, { Component } from 'react'

export class User extends Component {
    
    componentDidMount() {
        this.props.getUser
    }

    render() {
        return (
            <div>
                User
            </div>
        )
    }
}

export default User

import React, { Component } from 'react'

export class User extends Component {
    
    componentDidMount() {
        this.props.getUser(this.props.match)
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

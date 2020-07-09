import React from 'react'
import NavBarMenu from '../partials/menu'

class Home extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <div className="container">
                <NavBarMenu />
                <div>
                    Trang chủ
                </div>
            </div>
        )
    }
}

export default Home

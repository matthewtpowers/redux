import React from 'react';
import { Link } from 'react-router';
const apiUrl = process.env.NODE_ENV;

const Main = React.createClass({

    render(){

                console.log(apiUrl);
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
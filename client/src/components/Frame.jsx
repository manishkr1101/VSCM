import React, { Component } from 'react';

class Frame extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${this.props.imgUrl})`,
                    width: "100%",
                    backgroundSize: "cover",
                    paddingTop: "20px",
                    paddingBottom: "20px"
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Frame;

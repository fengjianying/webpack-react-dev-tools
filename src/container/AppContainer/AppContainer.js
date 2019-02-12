import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
// import './AppContainer.less'
class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div>hello</div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter( AppContainer );

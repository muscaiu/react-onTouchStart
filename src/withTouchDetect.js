import React, { Component } from 'react';
import cx from 'classnames';

export default function withTouchDetect(WrappedComponent) {

    return class TouchDetect extends Component {

        state = { hasTouch: false }

        handleTouchToggle = () => {
            this.setState({ hasTouch: !this.state.hasTouch });
        }

        render() {
            const { hasTouch } = this.state;
            const { className, ...rest } = this.props;
            return (
                <WrappedComponent
                    onTouchStart={this.handleTouchToggle}
                    onTouchEnd={this.handleTouchToggle}
                    className={cx(className, { touchStart: hasTouch })}
                    {...rest}
                />
            );
        }
    };
}

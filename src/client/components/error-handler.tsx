import React from "react";

class ErrorHandler extends React.Component {
  state = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {

      return (
        <div className="app-body">
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Render children if there's no error
    return this.props.children;
  }
}

export default ErrorHandler;


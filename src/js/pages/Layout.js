import React from "react";
import { Link, withRouter } from "react-router-dom";

class Layout extends React.Component {
  navigate() {
    // route path ページに遷移した上で、直前の履歴を消してしまう。
    this.props.history.replace("/");
  }
  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="/archives"><button class="btn btn-danger">archives</button></Link>
        <Link to="/settings" class="btn btn-success">settings</Link>
        <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}
// Linkの装飾方法は 2通りある。。。

export default withRouter(Layout);

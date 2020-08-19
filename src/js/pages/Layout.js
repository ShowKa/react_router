import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

class Layout extends React.Component {
  navigate() {
    // route path ページに遷移した上で、直前の履歴を消してしまう。
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="/archives/some-other-articles?date=yesterday&filter=none" className="btn btn-warning">archives (some other articles)</Link>
        <Link to="/archives?date=today&filter=hot" className="btn btn-danger">archives</Link>
        <NavLink to="/settings/main" className="btn btn-success" activeClassName="btn btn-danger">settings</NavLink>
        <Link to="/settings/extra" className="btn btn-success">settings (extra)</Link>
        <button className="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}
// Linkの装飾方法は 2通りある。。。
// navLinkは押下後に変化させられる特殊なリンク

export default withRouter(Layout);

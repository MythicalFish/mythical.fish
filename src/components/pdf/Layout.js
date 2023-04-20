import React from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import PageNumber from "./PageNumber";
import Font from "./Font";
import About from "./About";

class Layout extends React.Component {
  componentDidMount() {
    document.getElementsByTagName("html")[0].className = "document";
  }
  render() {
    const { content } = this.props;
    return (
      <div className="document-container">
        <Font />
        <div className="page">
          <div className="px-10 pt-10 pb-4">
            <Header />
          </div>
          <About content={content} />
          <PageNumber n={1} />
        </div>
        <Portfolio content={content} />
      </div>
    );
  }
}
export default Layout;

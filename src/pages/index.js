import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PDFLayout from "../components/pdf/Layout";

import "../assets/styles/app.css";
import "../assets/styles/components/tag.css";
import "../assets/styles/components/button.css";
import "../assets/styles/components/list.css";
import "../assets/styles/components/modal.css";
import "../assets/styles/components/theme.css";
import "../assets/styles/components/previewer.css";
import "../assets/styles/components/image-nav.css";
import "../assets/styles/utilities/tailwind.css"; /* Keep utils last */
import "../assets/styles/utilities/responsive-padding.css";
import "../assets/styles/utilities/sizing.css";
import "../assets/styles/utilities/colors.css";
import "../assets/styles/utilities/shadows.css";
import "../assets/styles/base/typography.css";
import "../assets/styles/modules/pdf-cv.css";

const parseData = (data) => {
  if (!data?.projects) {
    return { project: [], info: [] };
  }
  const projects = data.projects.edges.map(
    ({ node: { frontmatter, ...rest } }, key) => ({
      ...frontmatter,
      ...rest,
      key,
    })
  );
  const info = {};
  data.info.edges.forEach(({ node: { frontmatter, html } }) => {
    info[frontmatter.key] = { html, ...frontmatter };
  });
  return { projects, info };
};

const IndexPage = ({ data, location }) => {
  const props = { content: parseData(data) };
  if (location.search === "?pdf=1") {
    return <PDFLayout {...props} />;
  }
  return <Layout {...props} />;
};

export default IndexPage;

export const indexQuery = graphql`
  query indexQuery {
    info: allMarkdownRemark(filter: { frontmatter: { type: { eq: "info" } } }) {
      edges {
        node {
          html
          frontmatter {
            key
            itemList
          }
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { frontmatter: { position: DESC } }
      filter: {
        frontmatter: { visible: { eq: true }, type: { eq: "project" } }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            tags
            privateCode
            links {
              label
              url
            }
            previews {
              label
              description
              image
            }
          }
        }
      }
    }
  }
`;

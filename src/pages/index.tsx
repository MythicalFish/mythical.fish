import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PDFLayout from "../components/pdf/Layout";
import { SEO } from "../components/SEO";

import "../assets/styles/app.css";
import "../assets/styles/components/tag.css";
import "../assets/styles/components/button.css";
import "../assets/styles/components/list.css";
import "../assets/styles/components/modal.css";
import "../assets/styles/components/theme.css";
import "../assets/styles/components/previewer.css";
import "../assets/styles/components/image-nav.css";
import "../assets/styles/utilities/responsive-padding.css";
import "../assets/styles/utilities/sizing.css";
import "../assets/styles/utilities/colors.css";
import "../assets/styles/utilities/shadows.css";
import "../assets/styles/base/typography.css";
import "../assets/styles/modules/pdf-cv.css";

import { InfoProps, ProjectProps } from "src/types";

type GraphqlData = {
  info: {
    edges: [
      {
        node: {
          html: string;
          frontmatter: InfoProps;
        };
      }
    ];
  };
  projects: {
    edges: [
      {
        node: {
          html: string;
          frontmatter: ProjectProps;
        };
      }
    ];
  };
};

type AllInfoProps = { [key: string]: InfoProps };

export type AllContent = {
  info: AllInfoProps;
  projects: ProjectProps[];
};

const parseData = (data: GraphqlData): AllContent => {
  const projects = data.projects.edges.map(
    ({ node: { frontmatter, ...rest } }, key) => ({
      ...frontmatter,
      ...rest,
      key,
    })
  );
  const info: AllInfoProps = {};
  data.info.edges.forEach(({ node: { frontmatter, html } }) => {
    info[frontmatter.key] = { html, ...frontmatter };
  });
  return { projects, info };
};

const IndexPage: React.FC<{
  data: GraphqlData;
  location: Window["location"];
}> = ({ data, location }) => {
  const content = parseData(data);
  if (location.search === "?pdf=1") {
    return <PDFLayout content={content} />;
  }
  return <Layout content={content} />;
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
            date
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

export const Head = () => <SEO />;

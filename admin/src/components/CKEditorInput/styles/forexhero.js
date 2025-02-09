import { css } from "styled-components";

export const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .ck.ck-editor__main > .ck-editor__editable {
    background: #111725 !important;
    color: #F3F7FF;
  }

  /* Copy from school.css */
  :root {
    --fh-text-color: #F3F7FF;
    --fh-body-font: 'Source Serif Pro', serif;
    --fh-heading-font: 'Open Sans', sans-serif;
    --fh-border-radius: 10px;
  }
  .ck-content {
    background: #384157 !important;
    color: #FFFFFF;
    font-family: var(--fh-body-font);
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
  }
  .ck-content img {
    border-radius: var(--fh-border-radius);
    border: 1px solid #1C2232;
    width: 100%;
  }
  .ck-content .image, .ck-content .image-inline {
    border-radius: var(--fh-border-radius);
  }
  .ck-content .image {
    width: 100%;
    margin: 0 0 1rem 0;
  }
  .ck-content h1, .ck-content h2, .ck-content h3, .ck-content h4, .ck-content h5, .ck-content h6 {
    font-family: var(--fh-heading-font);
    font-weight: 700;
    line-height: normal;
    /*text-align: left; doesn't work for rtl */
    margin: 1.5em 0 1em 0;
  }
  .ck-content h1 {
    font-size: 24px;
  }
  .ck-content h2 {
    font-size: 18px;
  }
  .ck-content h3 {
    font-size: 18px;
  }
  .ck-content h4 {
    margin: 1em 0 0.5em 0;
    font-size: 16px;
  }
  .ck-content h5 {
    font-size: 16px;
  }
  .ck-content h6 {
    font-size: 16px;
  }
  .ck-content p {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
  .ck-content > p, .ck-content > div, .ck-content > ul, .ck-content > ol {
    margin-bottom: 1rem;
  }
  .ck-content > p:last-child, .ck-content > div:last-child, .ck-content > ul:last-child, .ck-content > ol:last-child {
    margin-bottom: 0;
  }
  .ck-content p a {
    text-decoration: underline;
    color: #a097ff;
  }
  .ck-content p a:hover {
    color: #a097ff;
  }
  .ck-content p a:visited {
    color: #a097ff;
  }
  .ck-content ol {
    margin: 0 0 1rem 2.5rem;
    counter-reset: list-counter;
    list-style: none;
  }
  .ck-content ol li {
    list-style: none;
    counter-increment: list-counter;
    position: relative;
    margin-bottom: 1rem;
  }
  .ck-content ol li::before {
    content: counter(list-counter) ".";
    font-weight: 900;
    /*color: #968BFC;*/
    position: absolute;
    left: -1.5rem;
  }
  .ck-content ul {
    margin: 0 0 1rem 2rem;
    /*list-style: none;*/
  }
  .ck-content ul li {
    /*list-style: none;*/
    margin-bottom: 0.5rem;
    /*position: relative;*/
  }
  /*.ck-content ul li::before {
    content: '';
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    background-image: url('/assets/bullet.svg');
    background-size: cover;
    margin-top: 0.4em;
    position: absolute;
    left: -1.25rem;
  }*/
  .ck-content ul li img, .ck-content ol li img {
    float: left;
    height: auto;
    margin-right: 6px;
    margin-top: 11px;
    width: 6px;
  }

  .ck-content .highlight {
    background-color: #455270;
    padding: 16px;
    color: #F3F7FF;
    border-radius: var(--fh-border-radius);
  }

  .ck-content .highlight-alt {
    background-color: #455270;
    padding: 16px;
    color: #F3F7FF;
    border-left: 2px solid #7E89A8;
  }

  .ck-content .highlight-stars {
    background-color: #455270;
    padding: 16px 16px 24px 16px;
    border-radius: var(--fh-border-radius);
    display: flex;
    flex-direction: column;
  }

  .ck-content .highlight-stars:before {
    content: url("/assets/stars.svg");
    margin-bottom: 24px;
    align-self: center;
  }

  .ck-content .note {
    font-size: 14px;
    line-height: 1.2;
    color: #7C89A9;
  }
`;

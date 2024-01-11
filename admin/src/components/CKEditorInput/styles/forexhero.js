import { css } from "styled-components";

export const style = css`
  .ck.ck-editor__main > .ck-editor__editable {
    background: #111725 !important;
    color: #fff;
  }

  .ck-content {
    --fh-text-padding: #F3F7FF;
    --fh-body-font: 'Source Serif Pro', serif;
    --fh-heading-font: 'Open Sans', sans-serif;
    --fh-border-radius: 10px;

    font-family: var(--fh-body-font);
    font-weight: normal;
    font-style: normal;
    font-size: 18px;

    img {
      border-radius: var(--fh-border-radius);
      width: 100%;
    }

    .image,
    .image-inline {
      border-radius: var(--fh-border-radius);
    }

    .image {
      width: 100%;
      margin: 0 0 1rem 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--fh-heading-font);
      font-weight: 700;
      text-align: left;
      margin: 1.5em 0 1em 0;
    }

    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 26px;
    }

    h4 {
      font-size: 20px;
    }

    h5 {
      font-size: 18px;
    }

    h6 {
      font-size: 18px;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
      margin: 0;
    }

    > p,
    > div,
    > ul,
    > ol {
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    p a {
      text-decoration: underline;
      color: #a097ff;

      &:hover {
        color: #a097ff;
      }

      &:visited {
        color: #a097ff;
      }
    }

    ol {
      margin: 0 0 1rem 2.5rem;
      counter-reset: list-counter;
      list-style: none;

      li {
        list-style: none;
        counter-increment: list-counter;
        position: relative;
        margin-bottom: 1rem;

        &::before {
          content: counter(list-counter) ".";
          font-weight: 900;
          color: #00D8AD;
          position: absolute;
          left: -1.5rem;
        }
      }
    }

    ul {
      margin: 0 0 1rem 2rem;
      list-style: none;

      li {
        list-style: none;
        display: flex;
        align-items: flex-start;
        margin-bottom: 1rem;
        position: relative;

        &::before {
          content: '';
          display: inline-block;
          width: 0.5em;
          height: 0.5em;
          background-image: url('/assets/bullet.svg');
          background-size: cover;
          margin-top: 0.2777em;// optical vertical centering
          position: absolute;
          left: -1.25rem;
        }
      }
    }

    //ul li,
    //ol li {
    //  font-size: 18px;
    //  line-height: 27px;
    //}

    //ul li {
    //  padding-left: 8px;
    //  position: relative;
    //}
    //
    //ul li:before {
    //  top: -3px;
    //  margin-left: -14px;
    //  content: url("/assets/bullet.png");
    //  position: absolute;
    //}

    ul li img,
    ol li img {
      float: left;
      height: auto;
      margin-right: 6px;
      margin-top: 11px;
      width: 6px;
    }

    .yellow_highlight {
      background-color: #FEFB0E;
      padding: 16px;
      color: #111725;
      border-radius: var(--fh-border-radius);
    }

    .gray_block_with_star {
      background-color: #605AA5;
      padding: 16px 16px 24px 16px;
      border-radius: var(--fh-border-radius);
      display: flex;
      flex-direction: column;
      align-items: center;

      &:before {
        content: url("/assets/stars.svg");
        margin-bottom: 24px;
      }
    }

    //img.fr-dii {
    //  display: inline-block;
    //  float: none;
    //  vertical-align: bottom;
    //  margin-left: 5px;
    //  margin-right: 5px;
    //  max-width: calc(100% - 10px);
    //}
    //
    //img.fr-dib {
    //  margin: 5px auto;
    //  display: block;
    //  float: none;
    //  vertical-align: top;
    //}
    //
    //img.fr-dib.fr-fil {
    //  margin-left: 0px;
    //}
    //
    //img.fr-dib.fr-fir {
    //  margin-right: 0px;
    //}
  }
`;

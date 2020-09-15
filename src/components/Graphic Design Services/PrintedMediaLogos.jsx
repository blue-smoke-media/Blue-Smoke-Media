import React from "react";
import printedMedia from "../../images/printed-media.png";
import { Helmet } from "react-helmet";
//* Images
// const printedMedia =
//   "https://blue-smoke-media.s3-us-west-1.amazonaws.com/printed-media.png";

export default function PrintedMediaLogos() {
  return (
    <div className="printed-logos page-wrapper">
      <img src={printedMedia} alt="this is the SEO" />
      <div>
        <h1>Printed Media Logos</h1>
        <p>
          One of the toughest design projects is reducing the identity of an
          organization to a single symbol. Many companies are complex systems of
          individuals and entities working toward a variety of goals. Our
          identities are the result of a process that remains flexible while at
          the same time building a brand. Looking for a unique image to
          represent your corporate identity? Or do you just need to modify your
          current logo for your web site? At your current logo for your web
          site? At <span>Blue Smoke Digital and Printed Media,</span> your
          current logo for your web site? At we create logos that capture the
          essence of your business, leaving impact for both print and web
          display.
        </p>
        <p>
          If you’re looking for a new logo or redesigning your current one for
          your web sit or corporate identity, we can assist you in the
          decision-making process. We specialize in both low-resolution (web)
          and high-resolution (print) graphic images. If you are interested in
          the prospect for a new logo, a redesign of your current logo or are in
          need of a total corporate identity, please complete the information
          request form. A representative will <a href="contact">contact </a>you
          within 24 hours of receipt of your request.
        </p>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com/#/website-design/PrintedMediaLogos"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Printed Media Logos</title>
        <meta
          name="description"
          content="One of the toughest design projects is reducing the identity of an organization to a single symbol. Many companies are complex systems of individuals and entities working toward a variety of goals. Our identities are the result of a process that remains flexible while at the same time building a brand."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Printed Media Logos" />
        <meta
          itemprop="description"
          content="One of the toughest design projects is reducing the identity of an organization to a single symbol. Many companies are complex systems of individuals and entities working toward a variety of goals. Our identities are the result of a process that remains flexible while at the same time building a brand."
        />
        <meta itemprop="image" content="../../images/printed-media.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Printed Media Logos" />
        <meta
          property="og:description"
          content="One of the toughest design projects is reducing the identity of an organization to a single symbol. Many companies are complex systems of individuals and entities working toward a variety of goals. Our identities are the result of a process that remains flexible while at the same time building a brand."
        />
        <meta property="og:image" content="../../images/printed-media.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Printed Media Logos" />
        <meta
          name="twitter:description"
          content="One of the toughest design projects is reducing the identity of an organization to a single symbol. Many companies are complex systems of individuals and entities working toward a variety of goals. Our identities are the result of a process that remains flexible while at the same time building a brand."
        />
        <meta name="twitter:image" content="../../images/printed-media.png" />
      </Helmet>
    </div>
  );
}

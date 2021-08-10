import React, { useState } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from '@material-ui/core/Button';
import { Pets, Twitter, Replay } from '@material-ui/icons';

import Layout from "../components/layout"
import Seo from "../components/seo"

function twitter() {
  window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };
    return t;
  }(document, "script", "twitter-wjs"));
}

const IndexPage = () => {

  twitter();

  let [nyan, setNyan] = useState(null);

  const nyaans = ["にゃーん", "にゃん", "にゃあああん"];

  const randomNyan = () => {
    return nyaans[Math.floor(Math.random() * (nyaans.length))];
  }

  const generateNyan = async () => {
    nyan = await randomNyan();
    setNyan(nyan);
    console.log(nyan);
  }

  if (nyan === null) {
    return (
      <Layout>
        <Seo title="にゃーん" />
        <p>↓にゃーんを生成</p>
        <Button variant="contained" endIcon={<Pets />} onClick={generateNyan}>
          にゃーん
        </Button>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Seo title="にゃーん" />
        <p>{nyan}</p>
        <Button variant="contained" startIcon={<Replay />} onClick={generateNyan} style={{ marginBottom: "10px" }}>
          りにゃーん
        </Button>
        <br />
        <Button 
          variant="contained" 
          href={"https://twitter.com/intent/tweet?hashtags=にゃーん生成器&text=" + nyan + "%20https://syobonpastel.github.io/random_nya-n/%20"}
          endIcon={<Twitter />}
        >
          ついーにゃ
        </Button>
      </Layout>
    );
  }
}

export default IndexPage

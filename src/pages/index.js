import React, { useState } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from '@material-ui/core/Button';
import { Pets } from '@material-ui/icons';

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  let [nyan, setNyan] = useState(null);

  const nyaans = ["にゃーん","にゃん","にゃあああん"];

  const randomNyan = () => {
    return nyaans[Math.floor(Math.random() * (nyaans.length))];
  }

  const generateNyan = async () =>{
    nyan = await randomNyan();
    setNyan(nyan);
    console.log(nyan);
  }

  if (nyan === null) {
    return (
      <Layout>
        <Seo title="Home" />
        <Button variant="contained" endIcon={<Pets />} onClick={generateNyan}>
          にゃーん
        </Button>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Seo title="Home" />
        <p>{nyan}</p>
        <Button variant="contained" endIcon={<Pets />} onClick={generateNyan}>
          りにゃーん
        </Button>
      </Layout>
    );
  }
}

export default IndexPage

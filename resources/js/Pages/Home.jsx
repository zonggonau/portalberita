import React from "react";
import Layout from "@/Layouts/Layout";
import Hero from "@/Components/Hero";
import BlockNews from "@/Components/BlockNews";
import SlideNews from "@/Components/SlideNews";
import BlockNewsOne from "@/Components/BlockNewsOne";
import BlockNewsTwo from "@/Components/BlockNewsTwo";
import BlockNewsThree from "@/Components/BlockNewsThree";

export default function Home(props) {
    const heroHeadline = props.newsapi;
    const technology = props.technology;
    const science = props.science;
    const popularity = props.popularity;
    const sports = props.sports;
    return (
        <Layout title={props.title}>
            <Hero props={heroHeadline} />
            <BlockNews title="Technology" props={technology} />
            <SlideNews title="Headline News" props={heroHeadline} />
            <BlockNewsOne title="Science" props={science} />
            <BlockNewsTwo title="Sport" props={(popularity, sports)} />
            <BlockNewsThree />
        </Layout>
    );
}

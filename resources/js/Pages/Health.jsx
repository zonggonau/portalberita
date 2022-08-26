import React from "react";
import Layout from "@/Layouts/Layout";
import Category from "@/Components/Category";

export default function Health(props) {
    const category = props.category;
    const popularity = props.popularity;

    const title = "Health";
    return (
        <Layout title={props.title}>
            <Category title={title} props={category} popularity={popularity} />
        </Layout>
    );
}

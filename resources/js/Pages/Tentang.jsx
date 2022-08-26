import React from "react";
import Layout from "../Layouts/Layout";

export default function Tentang(props) {
    return (
        <Layout props={props}>
            <h1>{props.title}</h1>
        </Layout>
    );
}

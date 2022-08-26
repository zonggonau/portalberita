import React from "react";
import Layout from "@/Layouts/Layout";
export default function Papua(props) {
    console.log(route("papua"));
    console.log(route().current("papua"));
    return <Layout title={props.title}></Layout>;
}

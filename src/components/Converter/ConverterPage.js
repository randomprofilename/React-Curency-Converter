import React from "react";
import ConverterTile from "./ConverterTile";
import { Segment } from "semantic-ui-react";

const ConverterPage = () => {
    return <>
        <h1> ConverterPage </h1>
        <Segment>
            <ConverterTile />
        </Segment>
    </>
};

export default ConverterPage;
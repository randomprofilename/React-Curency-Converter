import React from "react";
import ConverterTile from "./ConverterTile";
import { Segment } from "semantic-ui-react";

const ConverterPage = () => (
  <>
    <Segment>
      <h1> ConverterPage </h1>
    </Segment>
    <Segment>
      <ConverterTile />
    </Segment>
  </>
);

export default ConverterPage;
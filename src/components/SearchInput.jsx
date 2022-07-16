import React, { Component } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  background,
} from "@chakra-ui/react";

export class SearchInput extends Component {
  render() {
    return (
      <div className="filterBar">
        <div className="filter">
          <p className="filterNameFirst">Altura</p>
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div className="filter">
          <p className="filterName">Anchura</p>
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div className="filter">
          <p className="filterName">Longitud</p>
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
      </div>
    );
  }
}

export default SearchInput;

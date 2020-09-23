import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 september to 30 september . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d891cb8f-725f-48cf-bfb4-e784d4b1a00b.jpg?im_w=480"
        location="Private room in center London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bad . 1.5 Shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d891cb8f-725f-48cf-bfb4-e784d4b1a00b.jpg?im_w=480"
        location="Private room in center London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bad . 1.5 Shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d891cb8f-725f-48cf-bfb4-e784d4b1a00b.jpg?im_w=480"
        location="Private room in center London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bad . 1.5 Shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d891cb8f-725f-48cf-bfb4-e784d4b1a00b.jpg?im_w=480"
        location="Private room in center London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bad . 1.5 Shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d891cb8f-725f-48cf-bfb4-e784d4b1a00b.jpg?im_w=480"
        location="Private room in center London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bad . 1.5 Shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d891cb8f-725f-48cf-bfb4-e784d4b1a00b.jpg?im_w=480"
        location="Private room in center London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bad . 1.5 Shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;

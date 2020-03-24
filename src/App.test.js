import React from "react";
import { render, waitFor} from "@testing-library/react";
import App from "./App";
import {dummyData} from "./dummyData";
import { fetchShow as mockFetchShow } from "./api/fetchshow";
jest.mock("./api/fetchShow");


test("render App without crashing", async () => {
    render(<App />);
});
test("render fetching data", async () => {
    const {getByText} = render(<App />);
    expect(getByText("Fetching data...")).toBeInTheDocument();
});
test("good api call", async () => {
  mockFetchShow.mockResolvedValueOnce(dummyData);
  render(<App />);
  await waitFor(() => {
  })
});


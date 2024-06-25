import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import "@testing-library/jest-dom"
import Footer from "./Footer";

describe('Page footer', () => {

 test('should render the footer', () => {

  const { debug } = render(<Footer />)

  debug()
 }

)
});
import { render, waitFor } from "@testing-library/react";
import Hero from "./Hero";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { describe, test, expect } from "vitest";

describe("Hero component", () => {
  test("renders the image with props", async () => {
    const { getByAltText } = render(
      <Hero src="/hero.webp" width="800" height="600" alt="Hero Image" />
    );
    const image = getByAltText("Hero Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/hero.webp");
    expect(image).toHaveAttribute("width", "800");
    expect(image).toHaveAttribute("height", "600");
    expect(image).toHaveAttribute("loading", "eager");
    expect(image).toHaveAttribute("fetchPriority", "high");
  });

  test("renders the skeleton when loading", async () => {
    const { getByTestId } = render(
      <Suspense fallback={<Skeleton data-testid="skeleton" />}>
        <Hero src="/hero.webp" />
      </Suspense>
    );
    const skeleton = getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    await waitFor(() => expect(skeleton).not.toBeInTheDocument());
  });

  test("renders the image with additional props", async () => {
    const { getByAltText } = render(
      <Hero src="/hero.webp" data-testid="custom-hero" alt="Hero Image" />
    );
    const image = getByAltText("Hero Image");
    expect(image).toHaveAttribute("data-testid", "custom-hero");
  });

  test("does not render the skeleton when the image is loaded", async () => {
    const { queryByTestId, getByAltText } = render(
      <Suspense fallback={<Skeleton data-testid="skeleton" />}>
        <Hero src="/hero.webp" />
      </Suspense>
    );
    const skeleton = queryByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    await waitFor(() => expect(skeleton).not.toBeInTheDocument());
    const image = getByAltText("Hero Image");
    expect(image).toBeInTheDocument();
  });

  test("handles invalid image source", async () => {
    const { getByAltText, queryByAltText } = render(
      <Hero src="/invalid.webp" alt="Hero Image" />
    );
    const image = getByAltText("Hero Image");
    expect(image).toBeInTheDocument();
    await waitFor(() => expect(queryByAltText("Hero Image")).toBeNull());
  });
});
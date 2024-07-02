import { render } from '@testing-library/react';
import Blob from './Blob';
import { describe, it, expect } from 'vitest';

describe('Blob component', () => {
  it('renders the SVG element with correct dimensions', () => {
    const { getByTestId } = render(<Blob />);
    const svgElement = getByTestId('blob');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 440 440');
    expect(svgElement.getAttribute('width')).toBe('440');
    expect(svgElement.getAttribute('height')).toBe('440');
  });

  it('renders the SVG element with correct dimensions (alternative test)', () => {
    const { getByTestId } = render(<Blob />);
    const svgElement = getByTestId('blob');

    const { width, height } = svgElement.getBoundingClientRect();

    expect(width).toBe(440);
    expect(height).toBe(440);
  });

  it('renders the SVG element with correct dimensions (using CSS variables)', () => {
    const { getByTestId } = render(<Blob />);
    const svgElement = getByTestId('blob');

    const style = window.getComputedStyle(svgElement);

    expect(style.getPropertyValue('width')).toBe('440px');
    expect(style.getPropertyValue('height')).toBe('440px');
  });

  it('renders the SVG element with correct dimensions (using inline styles)', () => {
    const { getByTestId } = render(<Blob />);
    const svgElement = getByTestId('blob');

    expect(svgElement.style.width).toBe('440px');
    expect(svgElement.style.height).toBe('440px');
  });

  it('renders the SVG element with correct dimensions (using SVG attributes)', () => {
    const { getByTestId } = render(<Blob />);
    const svgElement = getByTestId('blob');

    expect(svgElement.getAttribute('width')).toBe('440');
    expect(svgElement.getAttribute('height')).toBe('440');
  });
});
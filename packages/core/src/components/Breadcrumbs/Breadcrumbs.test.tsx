import { axe, toHaveNoViolations } from 'jest-axe';
import { createRef } from 'react';
import * as React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Breadcrumbs } from '.';

const breadcrumbsContent = (
  <>
    <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="#">Page</Breadcrumbs.Item>
    <Breadcrumbs.Item>Current</Breadcrumbs.Item>
  </>
);

describe('Breadcrumbs', () => {
  it('should render', () => {
    render(<Breadcrumbs>{breadcrumbsContent}</Breadcrumbs>);
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLUListElement>();

    render(<Breadcrumbs ref={ref}>{breadcrumbsContent}</Breadcrumbs>);
    expect(ref.current).not.toBeNull();
  });

  it('should pass id prop', () => {
    const ref = createRef<HTMLUListElement>();

    render(
      <Breadcrumbs ref={ref} id="breadcrumbs-id">
        {breadcrumbsContent}
      </Breadcrumbs>
    );
    expect(ref.current).toHaveProperty('id', 'breadcrumbs-id');
  });

  it('should generate id prop', () => {
    const ref = createRef<HTMLUListElement>();

    render(<Breadcrumbs ref={ref}>{breadcrumbsContent}</Breadcrumbs>);
    expect(ref.current).toHaveProperty('id');
  });

  it('should be accessible', async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<Breadcrumbs>{breadcrumbsContent}</Breadcrumbs>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

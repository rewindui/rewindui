import { BreadcrumbsContext } from '@components/Breadcrumbs/Breadcrumbs.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [BreadcrumbsContextProvider, useBreadcrumbsContext] =
  createElementContext<BreadcrumbsContext>(
    'Breadcrumbs compound components cannot be rendered outside the Breadcrumbs component'
  );

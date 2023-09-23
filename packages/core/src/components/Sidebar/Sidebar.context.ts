import { SidebarContext } from '@components/Sidebar/Sidebar.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [SidebarContextProvider, useSidebarContext] = createElementContext<SidebarContext>(
  'Sidebar compound components cannot be rendered outside the Sidebar component'
);

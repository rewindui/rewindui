import { SidebarNavSectionItemContext } from '@components/Sidebar/SidebarNav/SidebarNavSection/SidebarNavSectionItem/SidebarNavSectionItem.types';
import { createIndependentContext } from '@hooks/use-independent-context.hook';

export const [SidebarNavSectionItemContextProvider, useSidebarNavSectionItemContext] =
  createIndependentContext<SidebarNavSectionItemContext>();

import { SidebarAction, sidebarActionEnum, SidebarState } from '@components/Sidebar/Sidebar.types';

export const sidebarReducer = (state: SidebarState, action: SidebarAction) => {
  switch (action.type) {
    case sidebarActionEnum.hover:
      return {
        ...state,
        hovered: action.payload.hovered,
        mobile: false,
      };

    case sidebarActionEnum.toggle:
      return {
        ...state,
        expanded: !state.expanded,
        hovered: false,
        mobile: false,
      };

    case sidebarActionEnum.expand:
      return {
        ...state,
        expanded: action.payload.expanded,
        mobile: false,
      };

    case sidebarActionEnum.mobile:
      return {
        ...state,
        expanded: true,
        hovered: false,
        mobile: !state.mobile,
      };
  }

  return state;
};

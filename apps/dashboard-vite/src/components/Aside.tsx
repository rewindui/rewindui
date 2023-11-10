import { Sidebar, SidebarState } from '@rewind-ui/core';
import { Logo } from '@icons/Logo.tsx';
import { Briefcase } from '@icons/Briefcase.tsx';
import { Link } from 'react-router-dom';

export default function Aside({ setExpanded, setMobile }: any) {
  return (
    <Sidebar
      onToggle={(state: SidebarState) => {
        setExpanded(state.expanded);
        setMobile(state.mobile);
      }}
    >
      <Sidebar.Head>
        <Sidebar.Head.Logo>
          <Logo />
        </Sidebar.Head.Logo>
        <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
        <Sidebar.Head.Toggle />
      </Sidebar.Head>

      <Sidebar.Nav>
        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Item
            icon={<Briefcase />}
            label="Dashboard"
            as={Link}
            asProps={{ to: '/' }}
          />
        </Sidebar.Nav.Section>
      </Sidebar.Nav>

      <Sidebar.Nav>
        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Title>Dates</Sidebar.Nav.Section.Title>
          <Sidebar.Nav.Section.Item
            icon={<Briefcase />}
            label="Calendar"
            as={Link}
            asProps={{ to: '/dates/calendar' }}
          />
        </Sidebar.Nav.Section>
      </Sidebar.Nav>

      <Sidebar.Footer>
        <div className="flex flex-col justify-center items-center text-sm">
          <span className="font-semibold">Rewind-UI</span>
          <span>version x.y.z</span>
        </div>
      </Sidebar.Footer>
    </Sidebar>
  );
}

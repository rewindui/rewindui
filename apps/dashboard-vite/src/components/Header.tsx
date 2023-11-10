import { Button, useSidebar } from '@rewind-ui/core';

export default function Header() {
  const sidebar = useSidebar();

  return (
    <header className="z-20 flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]">
      <span>Navbar</span>

      <Button
        onClick={() => {
          sidebar.toggleMobile();
        }}
        size="sm"
        color="white"
        icon
        className="ml-auto flex md:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
          <path
            className="opacity-50"
            d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
          />
        </svg>
      </Button>
    </header>
  );
}

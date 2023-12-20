/*
You need to install the following package npm install @headlessui/react@latest
*/

import { useState } from 'react';
import { Dialog, Menu } from '@headlessui/react';

const navigation = [
  { name: 'Link One', href: '#', dropdown: false },
  { name: 'Link Two', href: '#', dropdown: false },
  {
    name: 'Dropdown Three',
    dropdown: true,
    dropdownItems: [
      {
        name: 'Item #1',
        href: '#',
      },
      {
        name: 'Item #2',
        href: '#',
      },
      {
        name: 'Item #3',
        href: '#',
      },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-neutral-300 p-6 dark:border-neutral-700">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Logo className="h-8 w-auto fill-neutral-900 dark:fill-white" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerIcon
              className="h-6 w-6 stroke-neutral-800 dark:stroke-white"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* NAVIGATION ITEMS */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
                    {item.name}
                    <ChevronDownIcon className="ml-2 h-5 w-5 stroke-neutral-700 dark:stroke-neutral-300" />
                  </Menu.Button>

                  {/* DROPDOWN ITEMS */}
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white py-4 shadow-lg ring-1 ring-black/5 focus:outline-none bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900">
                    {item.dropdownItems.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={`${
                              active && 'bg-slate-200 dark:bg-slate-500'
                            } block px-4 py-2`}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-100"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4">
            <a
              href="#"
              className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-400"
            >
              Learn more <span aria-hidden="true">&rarr;</span>
            </a>

            <a
              href="#"
              className="rounded-md bg-transparent px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-neutral-100 dark:ring-neutral-600 dark:hover:bg-neutral-800 dark:focus-visible:outline-neutral-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-neutral-950 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo className="h-8 w-auto fill-neutral-900 dark:fill-white" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 stroke-neutral-800 dark:stroke-white"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* MOBILE NAVIGATION ITEMS */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/30 dark:divide-white/30">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100">
                          {item.name}
                        </span>

                        <div className="ml-4 mt-1">
                          {item.dropdownItems.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium leading-7 text-neutral-600 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-900"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-900"
                      >
                        {item.name}
                      </a>
                    )}{' '}
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-4 py-6">
                <a
                  href="#"
                  className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-400"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>

                <a
                  href="#"
                  className="rounded-md bg-transparent px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-neutral-100 dark:ring-neutral-600 dark:hover:bg-neutral-800 dark:focus-visible:outline-neutral-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

function Logo(props) {
  return (
    <svg viewBox="0 0 167 41" {...props}>
      <path
        fillRule="nonzero"
        d="M48.631 28.794h11.952v-3.6h-7.704v-13.56h-4.248v17.16zM67.664 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM81.094 33.042c1.824 0 3.432-.408 4.512-1.368.984-.888 1.632-2.232 1.632-4.08V16.506h-3.744v1.32h-.048c-.72-1.032-1.824-1.68-3.456-1.68-3.048 0-5.16 2.544-5.16 6.144 0 3.768 2.568 5.832 5.328 5.832 1.488 0 2.424-.6 3.144-1.416h.096v1.224c0 1.488-.696 2.352-2.352 2.352-1.296 0-1.944-.552-2.16-1.2h-3.792c.384 2.568 2.616 3.96 6 3.96zm-.024-7.824c-1.464 0-2.424-1.2-2.424-3.048 0-1.872.96-3.072 2.424-3.072 1.632 0 2.496 1.392 2.496 3.048 0 1.728-.792 3.072-2.496 3.072zM94.937 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM102.655 28.794h3.912V16.506h-3.912v12.288zm0-13.992h3.912v-3.168h-3.912v3.168zM108.264 32.85h3.912v-5.328h.048c.768 1.032 1.896 1.656 3.48 1.656 3.216 0 5.352-2.544 5.352-6.528 0-3.696-1.992-6.504-5.256-6.504-1.68 0-2.88.744-3.72 1.848h-.072v-1.488h-3.744V32.85zm6.432-6.696c-1.68 0-2.64-1.368-2.64-3.36 0-1.992.864-3.504 2.568-3.504 1.68 0 2.472 1.392 2.472 3.504 0 2.088-.912 3.36-2.4 3.36zM127.426 29.178c3.216 0 5.592-1.392 5.592-4.08 0-3.144-2.544-3.696-4.704-4.056-1.56-.288-2.952-.408-2.952-1.272 0-.768.744-1.128 1.704-1.128 1.08 0 1.824.336 1.968 1.44h3.6c-.192-2.424-2.064-3.936-5.544-3.936-2.904 0-5.304 1.344-5.304 3.936 0 2.88 2.28 3.456 4.416 3.816 1.632.288 3.12.408 3.12 1.512 0 .792-.744 1.224-1.92 1.224-1.296 0-2.112-.6-2.256-1.824h-3.696c.12 2.712 2.376 4.368 5.976 4.368zM138.331 29.154c1.704 0 2.784-.672 3.672-1.872h.072v1.512h3.744V16.506h-3.912v6.864c0 1.464-.816 2.472-2.16 2.472-1.248 0-1.848-.744-1.848-2.088v-7.248h-3.888v8.064c0 2.736 1.488 4.584 4.32 4.584zM147.521 28.794h3.912v-6.888c0-1.464.72-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-6.888c0-1.464.696-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-7.992c0-2.76-1.392-4.656-4.176-4.656-1.584 0-2.904.672-3.864 2.16h-.048c-.624-1.32-1.848-2.16-3.456-2.16-1.776 0-2.952.84-3.72 2.112h-.072v-1.752h-3.744v12.288z"
      ></path>
      <path d="M8.654 3.891a20.168 20.168 0 00-3.847 3.515c4.589-.426 10.42.27 17.189 3.654 7.228 3.614 13.049 3.737 17.1 2.955a19.842 19.842 0 00-1.378-3.199c-4.638.489-10.583-.158-17.511-3.622-4.4-2.2-8.278-3.106-11.553-3.303zM35.009 6.96A19.952 19.952 0 0020.101.294c-1.739 0-3.427.222-5.036.639 2.179.595 4.494 1.465 6.931 2.683 5.072 2.536 9.452 3.353 13.013 3.344zm4.953 10.962c-4.894.966-11.652.768-19.755-3.284-7.576-3.788-13.605-3.74-17.672-2.836-.21.046-.415.095-.615.146a19.9 19.9 0 00-1.262 3.64c.326-.087.662-.17 1.01-.247 4.933-1.096 11.903-1.049 20.328 3.164 7.575 3.787 13.605 3.74 17.672 2.836.139-.031.276-.063.411-.096a20.186 20.186 0 00-.117-3.323zm-.536 7.544c-4.846.847-11.408.522-19.219-3.384-7.576-3.787-13.605-3.74-17.672-2.836-.902.2-1.714.445-2.431.703-.002.114-.003.229-.003.345 0 11.045 8.955 20 20 20 9.258 0 17.046-6.289 19.325-14.828z"></path>
    </svg>
  );
}

function HamburgerIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function XMarkIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default Navbar;
// Dropdown.jsx
import { Menu } from '@headlessui/react';

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-lg hover:scale-105 transition transform duration-200">
        Open Menu 🚀
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-200 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#home"
                className={`${
                  active ? 'bg-purple-500 text-white' : 'text-gray-900'
                } group flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition duration-200`}
              >
                🏠 Home
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#about"
                className={`${
                  active ? 'bg-purple-500 text-white' : 'text-gray-900'
                } group flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition duration-200`}
              >
                💡 About
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#contact"
                className={`${
                  active ? 'bg-purple-500 text-white' : 'text-gray-900'
                } group flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition duration-200`}
              >
                📞 Contact
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}

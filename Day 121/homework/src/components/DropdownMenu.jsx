import { Menu } from '@headlessui/react';

export default function SexyDropdown() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-900">
      <Menu as="div" className="relative">
        <Menu.Button className="px-8 py-3 text-lg font-semibold text-white bg-white/10 rounded-full backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 transform transition-all duration-300">
          🚀 Open the Magic
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-4 w-56 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 overflow-hidden">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#home"
                className={`flex items-center px-6 py-4 text-sm font-medium text-white ${
                  active ? 'bg-purple-500/50' : 'hover:bg-purple-500/30'
                } transition-all duration-200`}
              >
                🏠 Home
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#about"
                className={`flex items-center px-6 py-4 text-sm font-medium text-white ${
                  active ? 'bg-pink-500/50' : 'hover:bg-pink-500/30'
                } transition-all duration-200`}
              >
                💡 About
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#contact"
                className={`flex items-center px-6 py-4 text-sm font-medium text-white ${
                  active ? 'bg-blue-500/50' : 'hover:bg-blue-500/30'
                } transition-all duration-200`}
              >
                📞 Contact
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

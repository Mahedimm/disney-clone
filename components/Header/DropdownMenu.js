import { Menu, Transition } from '@headlessui/react';
import { HomeIcon, LogoutIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

const DropdownMenu = ({user,signOut}) => {
  // // console.log(session);
  // const user = session?.session?.user;
    return (
        <div className="ml-auto ">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="      rounded-full bg-opacity-20 
            py-2 ring-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <img src={user.image} alt="profile" className="h-10 w-10 rounded-full object-cover cursor-pointer" /> 
  
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <HomeIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <HomeIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Home
                    </button>
                  )}
                </Menu.Item>
               
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={signOut}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex rounded-md  uppercase items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <LogoutIcon
                          className="w-5 h-5 mr-2 "
                          aria-hidden="true"
                        />
                      ) : (
                        <LogoutIcon
                          className="w-5 h-5 mr-2 "
                          aria-hidden="true"
                        />
                      )}
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
};

export default DropdownMenu;
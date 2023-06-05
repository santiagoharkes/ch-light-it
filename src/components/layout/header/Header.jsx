import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Transition, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Styles
import {
  HeaderContainer,
  LogoContainer,
  MenuItem,
  NavContainer,
} from "./HeaderStyles";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <NavContainer>
        {/* Logo */}
        <LogoContainer onClick={() => navigate("/")}>
          <span className="sr-only">Santiago Harkes Challenge</span>
          <img className="w-auto h-8" src="/logo.png" alt="" />
        </LogoContainer>

        {/* Menu dropdown */}
        <Menu as="div" className="relative hidden text-left lg:block">
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Guardar y salir
            <ChevronDownIcon
              className="w-5 h-5 -mr-1 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <MenuItem
                      active={active}
                      onClick={() =>
                        console.log("Botón Guardar y salir clickeado")
                      }
                    >
                      Guardar y salir
                    </MenuItem>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <MenuItem
                      active={active}
                      onClick={() =>
                        console.log("Botón Salir sin guardar clickeado")
                      }
                    >
                      Salir sin guardar
                    </MenuItem>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <MenuItem
                      active={active}
                      onClick={() =>
                        console.log("Botón Guardar y continuar clickeado")
                      }
                    >
                      Guardar y continuar
                    </MenuItem>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </NavContainer>
    </HeaderContainer>
  );
}

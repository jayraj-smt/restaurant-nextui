import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Image } from '@nextui-org/react'

const solutions = [
  {
    name: 'BreakFast',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Lunch',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Dinner',
    href: '#',
    icon: ViewGridIcon,
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="bg-white fixed w-full top-0 nav-bar-header">
      <div className="max-w-full mx-auto px-4 sm:px-6" style={{ boxShadow: "rgb(2 1 1 / 10%) 0px 5px 20px -5px" }}>
        <div className="flex justify-between items-center  py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">FULL MENU</span>
              <Image
                className="h-8 w-auto sm:h-14 "
                width={100}
                height={172}
                src="images/macd.png" />
            </a>
          </div>
          <Popover.Group as="nav" className="md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray' : 'text-black',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:black focus:outline-none  '
                    )}
                  >
                    <span className='font-semibold text-xl leading-snug' >FULL MENU</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-black-600' : 'text-black-400',
                        'ml-2 h-5 w-5 '
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen w-40 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-4">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-0 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>


    </Popover >

  )
}

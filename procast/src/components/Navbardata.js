import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Homepage",
    path: "/homepage",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Note1",
        path: "/note1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Note2",
        path: "/Note2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

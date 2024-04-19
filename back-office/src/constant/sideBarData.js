import { BsPatchQuestionFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { HiMiniGift } from "react-icons/hi2";
import { FaBookReader } from "react-icons/fa";


export const sidebarData = [
  { name: "Questions", icon: <BsPatchQuestionFill />, path: "questions" },
  { name: "Admins", icon: <RiAdminFill /> , path: "admins"},
  { name: "Rewards", icon: <HiMiniGift />,path: "rewards" },
  { name: "participants", icon: <FaBookReader /> ,path: "participants" },
];

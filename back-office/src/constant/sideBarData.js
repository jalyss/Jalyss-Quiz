import { BsPatchQuestionFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { HiMiniGift } from "react-icons/hi2";
import { FaBookReader } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";


export const sidebarData = [
  { name: "Dashboard", icon: <RxDashboard />, path: "/" },
  { name: "Questions", icon: <BsPatchQuestionFill />, path: "questions" },
  { name: "Admins", icon: <RiAdminFill /> , path: "admins"},
  { name: "Rewards", icon: <HiMiniGift />,path: "rewards" },
  { name: "Participants", icon: <FaUser /> ,path: "participants" },
];

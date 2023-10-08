import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const topQuestions = [
  {
    content:
      "Would it be appropriate to point out an error in another paper during a referee report?",
    id: "1",
    link: "/questions/1",
  },
  {
    content: "How can an airconditioning machine exist?",
    id: "2",
    link: "/questions/2",
  },
  {
    content: "Interrogated every time crossing UK Border as citizen",
    id: "3",
    link: "/questions/3",
  },
  { content: "Low digit addition generator", id: "4", link: "/questions/4" },
  {
    content: "What is an example of 3 numbers that do not make up a vector?",
    id: "5",
    link: "/questions/5",
  },
];

export const popularTags = [
  { tag: "javascript", count: 20152, id: "1", link: "/tags/1" },
  { tag: "next.js", count: 181493, id: "2", link: "/tags/2" },
  { tag: "react.js", count: 16269, id: "3", link: "/tags/3" },
  { tag: "node.js", count: 15121, id: "4", link: "/tags/4" },
  { tag: "python", count: 14431, id: "5", link: "/tags/5" },
  { tag: "microsoft azure", count: 9429, id: "6", link: "/tags/6" },
  { tag: "postgresql", count: 9429, id: "7", link: "/tags/7" },
  { tag: "machine learning", count: 9429, id: "8", link: "/tags/8" },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

import type { ExperienceItem, Course } from "./types";

// Source: extraction/17-experience-timeline.json
// Note: source printed end date "Feb 20204" — corrected to "Feb 2024".
export const experience: ExperienceItem[] = [
  {
    organization: "Indian Institute of Technology Patna",
    position: "Assistant Professor",
    start: "2024",
    end: "Present",
    duration: "Current",
    current: true,
  },
  {
    organization: "DA-IICT Gandhinagar",
    position: "Assistant Professor",
    start: "Dec 2022",
    end: "Feb 2024",
    duration: "~1 yr 3 mo",
  },
  {
    organization: "Indian Institute of Science (IISc) Bangalore",
    position: "Research Associate",
    start: "Sept 2022",
    end: "Dec 2022",
    duration: "~4 mo",
  },
];

// Source: extraction/18-courses.json (level/category inferred from code)
export const courses: Course[] = [
  {
    code: "CS244",
    title: "Introduction to Data Science",
    category: "Data Science",
    level: "Undergraduate",
  },
  {
    code: "CS2101",
    title: "Algorithms",
    category: "Core CS",
    level: "Undergraduate",
  },
  {
    code: "CS6109",
    title: "Drone Data Processing",
    category: "IoT & Sensing",
    level: "Postgraduate",
  },
  {
    code: "CS2206",
    title: "Data Analysis and Visualization",
    category: "Data Science",
    level: "Undergraduate",
  },
  {
    code: "CS2204",
    title: "IT Workshop",
    category: "Lab / Workshop",
    level: "Undergraduate",
  },
];

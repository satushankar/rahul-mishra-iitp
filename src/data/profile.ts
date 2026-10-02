import type { Profile } from "./types";

export const profile: Profile = {
  fullName: "Dr. Rahul Mishra",
  designation: "Assistant Professor",
  department: "Department of Computer Science and Engineering",
  institution: "Indian Institute of Technology Patna",
  institutionShort: "IIT Patna",
  email: "rahul_mishra@iitp.ac.in",
  phone: "06115-233-(8)989",
  profileUrl:
    "https://iitp.ac.in/departments/computer-science-engineering/faculty/profile?id=93",
  researchAreas: [
    "Deep Learning",
    "Fog Computing",
    "Internet of Things (IoT)",
    "Wireless Sensors Network (WSN)",
    "Smart Sensing",
  ],
  image: {
    src: "/profile/rahul-mishra.jpg",
    width: 1404,
    height: 1251,
    alt: "Dr. Rahul Mishra",
  },
  stats: {
    journals: 29,
    conferences: 16,
    totalOutputs: 45,
    patents: 1,
    books: 1,
  },
  thesis:
    "Building distributed and federated learning systems for resource-constrained edge, IoT, and sensing networks.",
  bio: "Dr. Rahul Mishra is an Assistant Professor in the Department of Computer Science and Engineering at IIT Patna. His research spans Deep Learning, Fog Computing, the Internet of Things, Wireless Sensor Networks, and Smart Sensing — with a strong recent focus on federated learning for heterogeneous, resource-constrained participants and lightweight neural networks for edge and IoT devices. He has published 45 works across top-tier IEEE Transactions and A*/A conferences including INFOCOM, SenSys, WoWMoM, and MSWIM.",
};

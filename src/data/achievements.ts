import type { Patent, BookItem, AwardItem, Membership } from "./types";

// Source: extraction 06-patents, 19-books, 07-awards, 08-memberships
export const patents: Patent[] = [
  {
    title:
      "Racket Sports Activities Monitoring and Corrections using Grip Embedded Sensors and Smartphone",
    inventors: ["Rahul Mishra", "T. K. Maiti", "A. Jain", "P. Lalwani", "R. Shah"],
    number: "202411014828",
    status: "Patent filed",
    description:
      "Monitoring and correction of racket-sports activities using grip-embedded sensors and a smartphone.",
  },
];

export const books: BookItem[] = [
  {
    title: "AICTE Textbook on Design and Analysis of Algorithm",
    publisher: "AICTE (All India Council for Technical Education)",
    description: "AICTE-sponsored textbook on Design and Analysis of Algorithms.",
  },
];

export const awards: AwardItem[] = [
  {
    name: "Student Conference Grant",
    organization: "IEEE Communications Society (ComSoc)",
    year: "2021, 2022",
    description:
      "Received student conference grant sponsored by IEEE ComSoc for INFOCOM 2021 and 2022.",
  },
];

export const memberships: Membership[] = [
  {
    organization: "IEEE (Institute of Electrical and Electronics Engineers)",
    type: "Member",
    status: "Active",
  },
];

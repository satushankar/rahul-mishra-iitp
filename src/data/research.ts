import type { ResearchDomain } from "./types";

export const researchDomains: ResearchDomain[] = [
  {
    slug: "deep-learning",
    name: "Deep Learning",
    description:
      "Design and training of deep and lightweight neural networks, knowledge distillation, model personalization, and locomotion/activity recognition from sensory data.",
    keywords: [
      "deep neural networks",
      "knowledge distillation",
      "lightweight models",
      "edge devices",
      "locomotion recognition",
      "noisy labels",
    ],
    relatedPublicationIds: [1, 3, 4, 5, 6, 7, 9, 10, 11, 25],
  },
  {
    slug: "fog-computing",
    name: "Fog Computing",
    description:
      "Task offloading, reallocation, and edge/fog computing schemes for passenger assistance, smart metering, and latency-sensitive IoT workloads.",
    keywords: [
      "fog computing",
      "task offloading",
      "edge computing",
      "passenger assistance",
      "game theory",
    ],
    relatedPublicationIds: [8, 22, 23],
  },
  {
    slug: "internet-of-things",
    name: "Internet of Things (IoT)",
    description:
      "IoT systems for environmental monitoring, precision agriculture, drones, smart metering, and medical IoT, including software-defined networking surveys.",
    keywords: [
      "IoT",
      "Internet of Drones",
      "precision agriculture",
      "river water monitoring",
      "smart metering",
      "Internet of Medical Things",
    ],
    relatedPublicationIds: [6, 17, 21, 22, 24, 26, 27, 28],
  },
  {
    slug: "wireless-sensor-networks",
    name: "Wireless Sensors Network (WSN)",
    description:
      "Sensor network coverage and connectivity, LoRa/LoRaWAN networks, interference mitigation, and sensor-based monitoring systems.",
    keywords: [
      "WSN",
      "LoRa",
      "LoRaWAN",
      "coverage & connectivity",
      "interference mitigation",
      "mobile sink",
    ],
    relatedPublicationIds: [16, 18, 29],
  },
  {
    slug: "smart-sensing",
    name: "Smart Sensing",
    description:
      "Sensor-driven sensing applications: road health monitoring, COVID-19 spread modeling, wearable activity/sport monitoring, wave height forecasting, and RSSI-based tracking.",
    keywords: [
      "smart sensing",
      "inertial sensors",
      "road health",
      "wearable devices",
      "wave forecasting",
      "RSSI tracking",
    ],
    relatedPublicationIds: [1, 2, 11, 12, 13, 14, 15, 19, 20],
  },
];

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Rahul Mishra — Research",
    short_name: "R. Mishra",
    description:
      "Academic research platform of Dr. Rahul Mishra, Assistant Professor in CSE at IIT Patna.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9faff",
    theme_color: "#00487e",
    icons: [
      {
        src: "/iitp-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

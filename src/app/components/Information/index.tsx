import { motion } from "framer-motion";
import Button from "../Button";
import Item, { ItemModel } from "./Item";
import "./styles.scss";

const items: ItemModel[] = [
  {
    poster_url: "/ico_drag.svg",
    title: "Drag and Drop",
    description: "Easily select and manage illustrations, text and templates",
  },
  {
    poster_url: "/ico_premade.svg",
    title: "Pre-Made Resources",
    description:
      "Don’t waste time! Use our templates and just customize colours, text etc",
  },
  {
    poster_url: "/ico_platform.svg",
    title: "Online Platform",
    description: "Access your creations at any time and from anywhere",
  },
  {
    poster_url: "/ico_odemand.svg",
    title: "On-demand Illustrations",
    description: "Don’t find exactly what you need? We will design it for you!",
  },
  {
    poster_url: "/ico_multiple.svg",
    title: "Multiple Sizing Options",
    description: "Ready-to-go templates in all popular sizes",
  },
  {
    poster_url: "/ico_share.svg",
    title: "Share creations",
    description: "Share your creations with your team or other users",
  },
];

export default function Information() {
  return (
    <motion.section 
      className="information-container"
      initial={{ transform: "translateY(5rem)", opacity: 0 }}
      whileInView={{ transform: "translateY(0)", opacity: 1 }}
    >
      <h2>Create effective science figures in minutes</h2>
      <h4>
        We built Mind the Graph for simplicity. The platform is easy to use and
        just about anybody can use it to create great infographics and
        presentations - from beginners to professionals, individuals to groups
        and small labs to large organisations
      </h4>
      <section className="information-items">
        {items.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            description={item.description}
            poster_url={item.poster_url}
          />
        ))}
      </section>
      <Button variant="secondary">EXPLORE MIND THE GRAPH</Button>
    </motion.section>
  );
}

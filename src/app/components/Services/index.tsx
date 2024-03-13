import Image from "next/image";
import "./styles.scss";

interface Service {
  poster_url: string;
  poster_alt: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    poster_url: "/image_2.svg",
    poster_alt: "A girl using a computer",
    title: "Graphical Abstractsand Infographics",
    description:
      "Improve your papers’ impact and visibility through quality visual communication",
  },
  {
    poster_url: "/image_3.svg",
    poster_alt: "A girl doing a presenting something.",
    title: "Scientific Poster in a few clicks",
    description:
      "Add visual impact to your posters with scientific illustrations and graphics",
  },
  {
    poster_url: "/image_1.svg",
    poster_alt: "A guy pointing at some screen",
    title: "Make better Slide Presentation",
    description:
      "Transform your lectures,meetings and classes into high-impact visual experiences",
  },
];

export default function Services() {
  return (
    <section className="services-container">
      <h2>Visualize what Mind the Graph can do for you</h2>
      <section className="services-list">
        {services.map((service) => (
          <article key={service.title} className="service-item">
            <Image
              src={service.poster_url}
              alt={service.poster_alt}
              width={215}
              height={202}
            />
            <h3>{service.title}</h3>
            <h4>{service.description}</h4>
            <a href="#">Learn more</a>
          </article>
        ))}
      </section>
    </section>
  );
}

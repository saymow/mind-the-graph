import Image from "next/image";
import "./styles.scss";

export interface ServiceModel {
  poster_url: string;
  poster_alt: string;
  title: string;
  description: string;
}

export default function Service(props: Readonly<ServiceModel>) {
  const { title, poster_alt, poster_url, description } = props;

  return (
    <article key={title} className="service-item">
      <Image src={poster_url} alt={poster_alt} width={215} height={202} />
      <h3>{title}</h3>
      <h4>{description}</h4>
      <a href="#">Learn more</a>
    </article>
  );
}

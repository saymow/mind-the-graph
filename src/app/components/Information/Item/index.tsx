import Image from "next/image";
import "./styles.scss";

export interface ItemModel {
  title: string;
  description: string;
  poster_url: string;
}

export default function Item(props: Readonly<ItemModel>) {
  const { title, description, poster_url } = props;

  return (
    <article className="information-item">
      <Image src={poster_url} alt={description} width={77} height={84} />
      <h3>{title}</h3>
      <h4>{description}</h4>
    </article>
  );
}

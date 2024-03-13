import "./styles.scss";

interface Props {
  onClick?: VoidFunction;
  children: React.ReactNode;
}

export default function Button(props: Readonly<Props>) {
  const { onClick } = props;
  return (
    <button className="button-container" onClick={onClick}>
      {props.children}
    </button>
  );
}

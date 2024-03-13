import "./styles.scss";

interface Props {
  onClick?: VoidFunction;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button(props: Readonly<Props>) {
  const { onClick, variant = "primary" } = props;
  return (
    <button
      className="button-container"
      data-variant={variant}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

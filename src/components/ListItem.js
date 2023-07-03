export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={props.href}>
        <img src={props.image} alt={props.alt} />
      </a>
    </li>
  );
}

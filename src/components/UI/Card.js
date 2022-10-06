const Card = (props) => {
  return (
    <div className="p-1 shadow-lg rounded-xl bg-white">{props.children}</div>
  );
};

export default Card;

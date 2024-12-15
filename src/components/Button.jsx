function Button(props) {
  return (
    <button className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-500" {...props}>
      {props.children}
    </button>
  );
}

export default Button;

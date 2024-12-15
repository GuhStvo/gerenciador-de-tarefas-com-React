function Title(props) {
  return (
    // TODA VEZ QUE CHAMAR PROPS.CHILDREN, O QUE FOR PASSADO DENTRO DO COMPONENTE SERÁ RENDERIZADO
    <h1 className="text-3xl text-slate-100 font-bold text-center">{props.children}</h1>
  )
}

export default Title;
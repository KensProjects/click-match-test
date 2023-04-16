import "./Box.css"

export default function Box({text}: {text:string}) {
  return (
    <div className="box">{text}</div>
  )
}

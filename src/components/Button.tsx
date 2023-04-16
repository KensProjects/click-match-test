import "./Button.css"

export default function Button({data, onClick}: {data:string, onClick: () => any}) {
  return (
    <button type='button' onClick={onClick} className="button">{data}</button>
  )
}

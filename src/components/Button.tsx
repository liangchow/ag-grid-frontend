type Props = {
  onClick: () => void
}

function Button({ onClick }: Props) {

  return (
    <button onClick={onClick}>
      Process
    </button>
  )
}

export default Button

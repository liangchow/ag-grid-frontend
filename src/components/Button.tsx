type Props = {
  onClick: () => void
  disabled?: boolean
  label?: string
}

function Button({ onClick, disabled = false, label = "Process" }: Props) {

  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default Button

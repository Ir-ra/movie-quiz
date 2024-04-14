export default function Button({ text, isSelected }: {
  text: string;
  isSelected: boolean;
}) {
  return (
    <button
      type="button"
      className={`button ${isSelected ? 'button__selected' : ''}`}
    >
      <p className="button__text">
        {text}
      </p>
    </button>
  )
}

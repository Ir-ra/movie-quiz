export default function Button({ text, isSelected, onClick }: {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}) {
   return (
    <button
      type="button"
      className={`button ${isSelected ? 'button__selected' : ''}`}
      onClick={onClick}
      disabled={!isSelected}
    >
      <p className="button__text">
        {text}
      </p>
    </button>
  )
}

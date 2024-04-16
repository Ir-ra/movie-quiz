export default function Progress({ percentage }: {
  percentage: number;
}) {
  return (
    <div className="progress">
      <div className="progress__line" style={{ width: `${percentage}%` }} />
    </div>
  )
}

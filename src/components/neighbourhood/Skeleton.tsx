export default function Skeleton() {
  return (
    <div className="grid">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="skeleton-card" />
      ))}
    </div>
  )
}
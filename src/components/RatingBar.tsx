interface RatingBarProps {
  label: string
  value: number
  color: string
}

export function RatingBar({ label, value, color }: RatingBarProps) {
  const barColor = color === 'blue' ? 'bg-blue-600' : 'bg-red-600'
  const bgColor = color === 'blue' ? 'bg-blue-100' : 'bg-red-100'

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700 w-40 shrink-0">{label}</span>
      <div className={`flex-1 ${bgColor} rounded-full h-4 overflow-hidden`}>
        <div
          className={`${barColor} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-sm font-bold text-gray-900 w-12 text-right">{value}%</span>
    </div>
  )
}

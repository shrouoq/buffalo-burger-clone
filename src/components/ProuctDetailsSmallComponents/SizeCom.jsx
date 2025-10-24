
export default function SizeCom({size}) {
  return (
    <div className="flex items-center gap-2 capitalize font-medium hover:text-orangee cursor-pointer">
      <input type="radio" checked className="accent-orangee w-5 h-5" />
      <label htmlFor="">{`${size.type}(EGP${size.price})`}</label>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="py-24 pb-16 text-center border-t border-white/5 bg-navy-deep">
      <div className="max-w-[1200px] mx-auto px-10">
        <p className="font-serif italic text-gold text-[22px] tracking-[0.5px]">
          Search. Stay. Succeed.
        </p>
        <div className="mt-10 text-[11px] opacity-40 tracking-[1px]">
          &copy; {new Date().getFullYear()} Local Experience Consulting.
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"
import { PLAYBOOKS as playbooks } from "@/lib/playbooks-data"

const TILTS = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1']

// The playbooks are laid out like booklets left on a reception counter.
export function Playbooks() {
  return (
    <section id="playbooks" className="py-16 md:py-24 bg-[#121212] text-center">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-6xl leading-[0.98] text-balance">
          Playbooks and guides
        </h2>
        <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/90 mt-5 mx-auto max-w-[52ch] leading-relaxed">
          Practical frameworks distilled from real work with East African hotels.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-14">
          {playbooks.map((playbook, i) => (
            <Link
              key={playbook.title}
              href={`/playbooks/${playbook.slug}`}
              className="group block w-full max-w-[340px]"
            >
              <div
                className={`relative aspect-[4/3] w-full bg-[#f5f3ef] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:rotate-0 ${TILTS[i % TILTS.length]}`}
              >
                <Image src={playbook.image} alt="" fill sizes="340px" className="object-contain p-4" />
              </div>
              <h3 className="font-sign font-bold text-[#F8F5EC] text-3xl mt-6 group-hover:text-[#F6B12C] transition-colors">
                {playbook.title}
              </h3>
              <p className="font-prose italic text-[#F6B12C] mt-1">{playbook.subtitle}</p>
              <p className="font-prose text-[#EAE5DF]/90 mt-3 leading-relaxed">{playbook.description}</p>
              <span className="inline-block mt-3 font-sign font-semibold text-xl text-[#F6B12C] underline decoration-2 underline-offset-4">
                View the playbook
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

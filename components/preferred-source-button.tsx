export function PreferredSourceButton() {
  return (
    <div className="bg-navy-alt border border-border-flat rounded-sm p-6 md:p-8 text-center my-12">
      <p className="text-[#F9F6F0] font-semibold mb-2">Want to see more from us in your Google results?</p>
      <p className="text-text-gray text-sm mb-5">
        Mark BookedUp Africa as a Preferred Source and we'll show up more often when you search for hotel marketing topics.
      </p>
      <a
        href="https://www.google.com/preferences/source?q=bookedupafrica.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] font-bold rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-[0.5px]"
      >
        Add as Preferred Source
      </a>
    </div>
  )
}

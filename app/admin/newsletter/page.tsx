// The newsletter runs on Substack, so subscribers and sending happen there.
const LINKS = [
  { title: 'Write and send a new issue', desc: 'Start a post and email it to your subscribers.', href: 'https://jomogere.substack.com/publish/posts' },
  { title: 'See your subscribers', desc: 'Who joined, when, and where they came from.', href: 'https://jomogere.substack.com/publish/subscribers' },
  { title: 'Stats', desc: 'Open rates, new subscribers and top posts.', href: 'https://jomogere.substack.com/publish/stats' },
  { title: 'Your public signup page', desc: 'The page the homepage button sends visitors to.', href: 'https://jomogere.substack.com/subscribe' },
]

export default function NewsletterManagement() {
  return (
    <div>
      <p className="text-text-gray mb-8 max-w-2xl">
        Your newsletter is run on Substack. The &quot;Yes, Send Me Weekly Insights&quot; button on the website sends visitors to
        your Substack signup page, and Substack stores the subscribers and sends the emails.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/5 border border-white/10 rounded-lg p-6 hover:border-gold-flat/50 transition-colors"
          >
            <div className="text-lg font-bold text-[#F9F6F0] mb-1">{l.title} →</div>
            <div className="text-sm text-text-gray">{l.desc}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

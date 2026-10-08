import SectionLanding from "@/components/shared/SectionLanding";
import { eventPages, upcomingEvents } from "@/data/events";

export const metadata = {
  title: "Events",
  description: "Upcoming Hopefelt Foundation workshops, conferences, webinars, and community events.",
};

export default function EventsOverviewPage() {
  return (
    <SectionLanding
      eyebrow="What's Coming Up"
      title="Events"
      intro="From local community gatherings to online webinars, here's how to find and join a Hopefelt event."
      basePath="/events"
      pages={eventPages}
    >
      <div className="mt-12 overflow-hidden rounded-xl2 border border-line bg-surface shadow-card">
        <div className="divide-y divide-line">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-body text-sm font-semibold text-ink">{event.title}</p>
                <p className="font-body text-xs text-ink/60">{event.location} · {event.category}</p>
              </div>
              <p className="font-body text-sm font-medium text-forest">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionLanding>
  );
}

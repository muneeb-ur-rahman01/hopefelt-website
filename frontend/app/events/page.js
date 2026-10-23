import Events from "@/components/events/Events";
import { eventPages, upcomingEvents } from "@/data/events";

export const metadata = {
  title: "Events",
  description: "Upcoming Hopefelt Foundation workshops, conferences, webinars, and community events.",
};

export default function EventsOverviewPage() {
  return (
    <Events/>
  );
}

"use client";

import type { LucideIcon } from "lucide-react";
import { Archive, ArrowRight, ChevronRight, DoorOpen, Flame, Library, PenSquare, Server, Wrench } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type SpotId = "entry" | "shelf" | "kitchen" | "study" | "garage" | "attic" | "basement";

type SpotConfig = {
  id: SpotId;
  name: string;
  href?: string;
  icon: LucideIcon;
  livesThere: string;
  action: string;
  zone: string;
};

const spotConfigs: SpotConfig[] = [
  {
    id: "entry",
    name: "Entry",
    href: "/",
    icon: DoorOpen,
    livesThere: "The front door back to home: your portfolio landing and the main hallway into everything else.",
    action: "Step through to the home page.",
    zone: "left-[46%] top-[57%] h-[23%] w-[8%]",
  },
  {
    id: "shelf",
    name: "Shelf",
    href: "/shelf",
    icon: Library,
    livesThere: "Media worth keeping within reach: shows, books, podcasts, and other things that add personality.",
    action: "Browse the shelf collection.",
    zone: "left-[13%] top-[39%] h-[24%] w-[17%]",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: Flame,
    livesThere: "Where experiments are on the stove: active builds, sketches, and things still cooking.",
    action: "Kitchen tours will open when experiments are ready to share.",
    zone: "left-[39%] top-[39%] h-[24%] w-[22%]",
  },
  {
    id: "study",
    name: "Study",
    href: "/blog",
    icon: PenSquare,
    livesThere: "Writing and project notes: essays, engineering breakdowns, and longer reflections.",
    action: "Open the study journal.",
    zone: "left-[68%] top-[39%] h-[24%] w-[18%]",
  },
  {
    id: "garage",
    name: "Garage",
    href: "/projects",
    icon: Wrench,
    livesThere: "Tools, systems, and reusable builds—the workshop wall for things I make and keep improving.",
    action: "Roll up the garage door to the project gallery.",
    zone: "left-[11%] top-[67%] h-[17%] w-[22%]",
  },
  {
    id: "attic",
    name: "Attic",
    icon: Archive,
    livesThere:
      "Shelved ideas and early prototypes, including Modular Context Abstraction: useful thoughts that are not main showcase builds yet.",
    action: "Attic notes will surface once an idea is worth pulling back into the house.",
    zone: "left-[38%] top-[18%] h-[13%] w-[24%]",
  },
  {
    id: "basement",
    name: "Basement",
    icon: Server,
    livesThere: "Infrastructure, backends, and deeper systems—the wiring and foundations below the floorboards.",
    action: "Basement notes on plumbing and architecture will land here soon.",
    zone: "left-[58%] top-[78%] h-[13%] w-[31%]",
  },
];

const futureRooms = new Set<SpotId>(["kitchen", "attic", "basement"]);

function comingSoonDetail(id: SpotId): string {
  switch (id) {
    case "kitchen":
      return "Experiments stay in the kitchen until they are ready to move upstairs. A public view of this room is planned.";
    case "attic":
      return "The attic holds shelved ideas and early prototypes like Modular Context Abstraction. They stay here until they mature into tools, writeups, or finished builds.";
    case "basement":
      return "Basement work covers infrastructure and backend depth. Notes and diagrams will anchor here as they are written.";
    default:
      return "Additional details will be shared here soon.";
  }
}

function SpotButton({
  spot,
  isActive,
  onSelect,
}: {
  spot: SpotConfig;
  isActive: boolean;
  onSelect: (id: SpotId) => void;
}) {
  const className = `group absolute cursor-pointer rounded-md border transition-all duration-200 ${spot.zone} ${
    isActive
      ? "border-neutral-500 bg-neutral-800/10 shadow-[0_0_0_1px_rgba(64,64,64,0.2)] dark:border-neutral-400 dark:bg-neutral-100/10"
      : "border-transparent hover:border-neutral-400 hover:bg-neutral-800/5 dark:hover:border-neutral-500 dark:hover:bg-neutral-100/10"
  }`;

  if (spot.href) {
    return (
      <Link
        href={spot.href}
        aria-label={spot.name}
        className={className}
        onMouseEnter={() => onSelect(spot.id)}
        onFocus={() => onSelect(spot.id)}
      />
    );
  }

  return (
    <button type="button" aria-label={spot.name} className={className} onMouseEnter={() => onSelect(spot.id)} onClick={() => onSelect(spot.id)} />
  );
}

export default function HouseScene() {
  const [selectedRoomId, setSelectedRoomId] = useState<SpotId>("entry");

  const selectedRoom = useMemo(
    () => spotConfigs.find((room) => room.id === selectedRoomId) ?? spotConfigs[0],
    [selectedRoomId],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-5">
        <div className="relative mx-auto aspect-[10/8] w-full max-w-4xl overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950">
          <div className="absolute left-1/2 top-[5%] h-0 w-0 -translate-x-1/2 border-b-[92px] border-l-[195px] border-r-[195px] border-l-transparent border-r-transparent border-b-neutral-700 dark:border-b-neutral-600" />
          <div className="absolute left-1/2 top-[19%] h-[56%] w-[78%] -translate-x-1/2 rounded-md border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900" />
          <div className="absolute left-1/2 top-[76%] h-[16%] w-[78%] -translate-x-1/2 rounded-b-md border border-neutral-300 bg-neutral-200/80 dark:border-neutral-700 dark:bg-neutral-800/70" />

          <div className="absolute left-[22%] top-[31%] h-[44%] w-px bg-neutral-300 dark:bg-neutral-700" />
          <div className="absolute left-[40%] top-[31%] h-[44%] w-px bg-neutral-300 dark:bg-neutral-700" />
          <div className="absolute left-[64%] top-[31%] h-[44%] w-px bg-neutral-300 dark:bg-neutral-700" />
          <div className="absolute left-[11%] top-[63%] h-px w-[78%] bg-neutral-300 dark:bg-neutral-700" />

          <div className="absolute left-[14%] top-[33%] h-[18%] w-[14%] rounded-sm border border-neutral-300 bg-neutral-200/70 dark:border-neutral-700 dark:bg-neutral-800/70" />
          <div className="absolute left-[14.5%] top-[36%] h-[2%] w-[13%] bg-neutral-400/80 dark:bg-neutral-600" />
          <div className="absolute left-[14.5%] top-[40%] h-[2%] w-[13%] bg-neutral-400/80 dark:bg-neutral-600" />
          <div className="absolute left-[14.5%] top-[44%] h-[2%] w-[13%] bg-neutral-400/80 dark:bg-neutral-600" />

          <div className="absolute left-[44%] top-[45%] h-[6%] w-[12%] rounded-sm border border-neutral-300 bg-neutral-300/70 dark:border-neutral-700 dark:bg-neutral-700/70" />
          <div className="absolute left-[46%] top-[36%] h-[9%] w-[2%] rounded-sm bg-neutral-500/80 dark:bg-neutral-500" />
          <div className="absolute left-[51%] top-[36%] h-[9%] w-[2%] rounded-sm bg-neutral-500/80 dark:bg-neutral-500" />

          <div className="absolute left-[71%] top-[45%] h-[6%] w-[12%] rounded-sm border border-neutral-300 bg-neutral-300/70 dark:border-neutral-700 dark:bg-neutral-700/70" />
          <div className="absolute left-[73%] top-[38%] h-[6%] w-[4%] rounded-sm border border-neutral-300 bg-neutral-400/70 dark:border-neutral-700 dark:bg-neutral-700/70" />
          <div className="absolute left-[79%] top-[36%] h-[9%] w-[3%] rounded-sm bg-neutral-500/80 dark:bg-neutral-500" />

          <div className="absolute left-[13%] top-[69%] h-[11%] w-[19%] rounded-sm border border-neutral-300 bg-neutral-300/70 dark:border-neutral-700 dark:bg-neutral-700/70" />
          <div className="absolute left-[14%] top-[72%] h-[1.2%] w-[17%] bg-neutral-500/80 dark:bg-neutral-500" />
          <div className="absolute left-[14%] top-[75%] h-[1.2%] w-[17%] bg-neutral-500/80 dark:bg-neutral-500" />

          <div className="absolute left-[44%] top-[20%] h-[5%] w-[6%] rounded-sm border border-neutral-300 bg-neutral-300/80 dark:border-neutral-700 dark:bg-neutral-700/80" />
          <div className="absolute left-[52%] top-[20%] h-[5%] w-[7%] rounded-sm border border-neutral-300 bg-neutral-300/80 dark:border-neutral-700 dark:bg-neutral-700/80" />

          <div className="absolute left-[61%] top-[80%] h-[8%] w-[12%] rounded-sm border border-neutral-400 bg-neutral-500/70 dark:border-neutral-600 dark:bg-neutral-700/70" />
          <div className="absolute left-[75%] top-[80%] h-[8%] w-[12%] rounded-sm border border-neutral-400 bg-neutral-500/70 dark:border-neutral-600 dark:bg-neutral-700/70" />
          <div className="absolute left-[62%] top-[84%] h-[1%] w-[24%] bg-sky-500/40 dark:bg-sky-400/30" />

          <div className="absolute left-[46%] top-[57%] h-[23%] w-[8%] rounded-t-md border border-neutral-400 bg-neutral-400/80 dark:border-neutral-600 dark:bg-neutral-700/80" />
          <div className="absolute left-[53%] top-[66%] h-[2%] w-[1.2%] rounded-full bg-neutral-500 dark:bg-neutral-400" />

          {spotConfigs.map((spot) => (
            <SpotButton key={spot.id} spot={spot} isActive={selectedRoomId === spot.id} onSelect={setSelectedRoomId} />
          ))}
        </div>

        <p className="mt-3 text-xs leading-5 text-neutral-500 dark:text-neutral-400">Click around the house to explore.</p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:hidden">
          {spotConfigs.map((room) => {
            const Icon = room.icon;
            const isActive = selectedRoomId === room.id;

            if (room.href) {
              return (
                <Link
                  key={room.id}
                  href={room.href}
                  onMouseEnter={() => setSelectedRoomId(room.id)}
                  onFocus={() => setSelectedRoomId(room.id)}
                  className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    isActive
                      ? "border-neutral-400 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800/80"
                      : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/70"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-100">
                    <Icon size={14} />
                    {room.name}
                  </span>
                  <ChevronRight size={14} className="text-neutral-500 dark:text-neutral-400" />
                </Link>
              );
            }

            return (
              <button
                key={room.id}
                type="button"
                onMouseEnter={() => setSelectedRoomId(room.id)}
                onClick={() => setSelectedRoomId(room.id)}
                className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                  isActive
                    ? "border-neutral-400 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800/80"
                    : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/70"
                }`}
              >
                <span className="inline-flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-100">
                  <Icon size={14} />
                  {room.name}
                </span>
                <ChevronRight size={14} className="text-neutral-500 dark:text-neutral-400" />
              </button>
            );
          })}
        </div>
      </div>

      <aside className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">House Guide</p>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">{selectedRoom.name}</h2>

        <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">What lives here</p>
        <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{selectedRoom.livesThere}</p>

        <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">Destination</p>
        <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{selectedRoom.action}</p>

        {selectedRoom.href ? (
          <Link
            href={selectedRoom.href}
            className="group mt-5 inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/70"
          >
            Visit Room
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div className="mt-5 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">Coming soon</p>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
              {futureRooms.has(selectedRoom.id) ? comingSoonDetail(selectedRoom.id) : "Additional details will be shared here soon."}
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}

const weeks = Array.from({ length: 22 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => ((week * 3 + day * 5) % 9 === 0 ? 3 : (week + day) % 5 === 0 ? 2 : (week + day) % 3 === 0 ? 1 : 0))
);

const shades = ["bg-muted", "bg-blue/25", "bg-blue/55", "bg-blue"];

export function LeetCodeHeatmap() {
  return (
    <div className="overflow-x-auto rounded-[8px] border border-border bg-background/50 p-4" aria-label="Coding practice heatmap">
      <div className="flex min-w-[620px] gap-1">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid gap-1">
            {week.map((value, dayIndex) => (
              <span
                key={`${weekIndex}-${dayIndex}`}
                className={`size-3 rounded-[3px] ${shades[value]}`}
                title={`${value} practice sessions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

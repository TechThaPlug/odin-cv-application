export function formatMonth(value) {
  if (!value) {
    return "";
  }

  const [year, month] = value.split("-");

  return new Date(Number(year), Number(month) - 1, 1).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" },
  );
}

export function formatRange(from, until) {
  const start = formatMonth(from);
  const end = until ? formatMonth(until) : "Present";

  return start + " – " + end;
}

export function duration(millis) {
  const mins = Math.floor(millis / 60000);
  const secs = ((millis % 60000) / 1000).toFixed(0);
  return secs == 60
    ? mins + 1 + ":00"
    : mins + ":" + (secs < 10 ? "0" : "") + secs;
}
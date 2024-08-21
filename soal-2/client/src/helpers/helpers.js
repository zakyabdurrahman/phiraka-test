export function formatDate(string) {
  return string.split("T")[0].replaceAll('-', '/');
}
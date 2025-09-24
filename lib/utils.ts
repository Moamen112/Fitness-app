/**
 * Formats duration in seconds to a human-readable string
 */

export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds} s`;
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remaingSeconds = seconds % 60;

  if (hours > 0) {
    if (remaingSeconds > 0) {
      return `${hours}h ${minutes}m ${remaingSeconds}s`;
    } else if (minutes > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${hours}h`;
    }
  } else {
    if (remaingSeconds > 0) {
      return `${minutes}m ${remaingSeconds}s `;
    } else {
      return `${minutes}m`;
    }
  }
}

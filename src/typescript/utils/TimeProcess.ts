export function TimeProcess(time: string): string {
    let date = new Date(time);
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);


    if (days > 7) {
        return date.toLocaleString(navigator?.language, {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    } else if (days > 0) {
        return `${days} day${days === 1 ? '' :'s'} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' :'s'} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes === 1 ? '' :'s'} ago`;
    } else if (seconds > 30) {
        return `${seconds} seconds ago`;
    } else {
        return `Just now`;
    }
}
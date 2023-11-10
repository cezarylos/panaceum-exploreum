export function timestampToDaysHoursAgo(timestamp: number | string): string {
  const secondsInDay = 86400; // 24 hours * 60 minutes * 60 seconds
  const secondsInHour = 3600; // 60 minutes * 60 seconds
  const secondsInMinute = 60; // 60 seconds

  const timestampDate = new Date(+timestamp * 1000);
  const currentDate = new Date();

  const timeDifferenceInSeconds = Math.floor((+currentDate - +timestampDate) / 1000);

  const days = Math.floor(timeDifferenceInSeconds / secondsInDay);
  const hours = Math.floor((timeDifferenceInSeconds % secondsInDay) / secondsInHour);
  const minutes = Math.floor((timeDifferenceInSeconds % secondsInHour) / secondsInMinute);

  const formattedTime = [
    days > 0 ? `${days} days` : '',
    hours > 0 ? `${hours} hrs` : '',
    minutes > 0 ? `${minutes} mins` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return formattedTime.length > 0 ? `${formattedTime} ago` : 'Just now';
}

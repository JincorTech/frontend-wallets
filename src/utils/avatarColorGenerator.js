const COLORS = [
  '#72A6F2', '#A68BF9', '#8BDDF9', '#FE7673', '#F99F8B',
  '#9DD06A', '#E1DA82', '#6B7BA0', '#82558D', '#F6A623'
];

/**
 * Return user specific color
 * @param id - user's unique id
 */

export function getBackgroundColor(id) {
  const index = id.split('').reduce((acc, item) => acc + item.charCodeAt(0), 0);
  const color = COLORS[index % COLORS.length];

  return { backgroundColor: color };
}

/**
 * Return user intials
 * @param fullName - user's full name
 */

export function getInitials(fullName) {
  return fullName
    .split(' ')
    .map((item) => item.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

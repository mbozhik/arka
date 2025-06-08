export const HEADER_PATHS = ['Mission & founders', 'Services', 'Offices', 'Media']

export function getHeaderPath(path: string, type: 'link' | 'target'): string {
  const formattedPath = path.replace(/ /g, '-').toLowerCase()

  if (formattedPath === 'mission-&-founders') {
    return '/#mission-founders'
  }

  switch (type) {
    case 'link':
      return `/#${formattedPath}`
    case 'target':
      return formattedPath
  }
}

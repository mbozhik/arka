export const HEADER_PATHS = ['Mission & founders', 'Services', 'Offices', 'Media']

export function getPathLink(path: string, type: 'anchor' | 'link' | 'id'): string {
  const formattedPath = path.replace(/ /g, '-').replace(/&/g, '').replace(/-+/g, '-').toLowerCase()

  switch (type) {
    case 'anchor':
      return `/#${formattedPath}`
    case 'link':
      return `/${formattedPath}`
    case 'id':
      return formattedPath
  }
}

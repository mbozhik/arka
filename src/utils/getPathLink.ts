export const HEADER_PATHS = ['Mission & founders', 'Services', 'Offices', 'Media']
export const FOOTER_PATHS = ['Team', 'Investment strategy', 'Insights', 'Portfolio', 'Contact', 'Founders']

export function getPathLink(path: string, type: 'anchor' | 'page' | 'id'): string {
  const formattedPath = path.replace(/ /g, '-').replace(/&/g, '').replace(/-+/g, '-').toLowerCase()

  switch (type) {
    case 'anchor':
      return `/#${formattedPath}`
    case 'page':
      return `/${formattedPath}`
    case 'id':
      return formattedPath
  }
}

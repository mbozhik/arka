import type {MEDIA_QUERYResult} from '../../../sanity.types'
export type {MEDIA_QUERYResult}

import {sanityFetch} from '@/sanity/lib/live'
import {defineQuery} from 'next-sanity'
import {draftMode} from 'next/headers'

async function fetchEntity<T>(query: string, draft: boolean = true): Promise<T[]> {
  try {
    const {isEnabled} = await draftMode()

    const response = await sanityFetch({
      query,
      ...(isEnabled && draft
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : undefined),
    })
    return (response.data as T[]) || []
  } catch (error) {
    console.log('Error fetching data:', error)
    return []
  }
}

const MEDIA_QUERY = defineQuery(`
    *[_type == "media"]{
        heading, date, source, size, image,
    }`)

const QUERIES = {
  MEDIA_QUERY,
} as const

export const getMedia = (): Promise<MEDIA_QUERYResult> => fetchEntity(QUERIES.MEDIA_QUERY)

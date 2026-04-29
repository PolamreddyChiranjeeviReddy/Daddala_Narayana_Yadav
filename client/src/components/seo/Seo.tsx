import { useEffect } from 'react'

function upsertMetaByName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function Seo({
  title,
  description,
  ogImage,
}: {
  title: string
  description: string
  ogImage?: string
}) {
  useEffect(() => {
    document.title = title
    upsertMetaByName('description', description)

    upsertMetaByProperty('og:type', 'website')
    upsertMetaByProperty('og:title', title)
    upsertMetaByProperty('og:description', description)

    if (ogImage) upsertMetaByProperty('og:image', ogImage)
  }, [title, description, ogImage])

  return null
}

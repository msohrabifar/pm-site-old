export interface TimeStamp {
  created_by: string | null
  updated_by: string | null
  created_at: string | null
  updated_at: string | null
}
export interface IsActive {
  is_active: boolean
}

export interface Image extends TimeStamp, IsActive {
  id: number
  file_name: string
  format: string
  size: number
  period: null | number
  path: string
  alt: string
  type_id: number
}

export interface Faq {
  ask: string
  order: number
  question: string
}

export interface Author extends IsActive {
  author_id: number
  display_name: string
  email: string
  twitter: string
  facebook: string
  instagram: string
  linkedin: string
  bio: string
}

export interface Post extends TimeStamp, IsActive {
  id: number
  title: string
  en_title: string
  sub_title: string
  slug: string
  desc: string
  body: string
  visit_count: number
  image_id: number
  image: Image
  category_id: number
  category_name: string
  tags: Array<any> | Array<never>
  status_id: number
  post_type_id: number
  post_type_name: string
  faqs: Array<Faq> | Array<never>
  image_gallery: null | Array<any>
  video_gallery: null | Array<any>
  author: Author
}

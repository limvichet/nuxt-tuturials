// types/product.ts
export interface Category {
  id: number
  name: string
}

export interface Product {
  id: number
  name: string
  category?: Category
}

export interface Pagination<T> {
  current_page: number
  data: T[]
  last_page: number
  prev_page_url: string | null
  next_page_url: string | null
}

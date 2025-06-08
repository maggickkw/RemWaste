/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SkipI {
  id: number | string
  size: number
  hire_period_days: number
  transport_cost: any
  per_tonne_cost: any
  price_before_vat: number
  vat: number
  postcode: string
  area: string
  forbidden: boolean
  created_at: string
  updated_at: string
  allowed_on_road: boolean
  allows_heavy_waste: boolean
}

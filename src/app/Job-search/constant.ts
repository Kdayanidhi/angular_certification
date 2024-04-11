export interface JobDetails {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isFavorite: boolean
}

export interface JobDesciption {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  location: string,
  industries: string,
  types: string,
  description: string,
  publishDate: string
}
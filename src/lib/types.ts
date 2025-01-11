export interface response {
    success: boolean
    courses: Course[]
  }
  
  export interface Course {
    id: number
    name: string
    description: string
    rating: number
    number_of_ratings: number
    course_duration: string
    course_lessons: number
    course_level: string
    course_original_price: number
    course_discounted_price: number
  }
  

  export interface Root {
    success: boolean
    course: Course
  }
  
  export interface CourseDetails {
    basic_info: BasicInfo
    details: Details
  }
  
  export interface BasicInfo {
    id: number
    name: string
    description: string
    rating: number
    number_of_ratings: number
    course_duration: string
    course_lessons: number
    course_level: string
    course_original_price: number
    course_discounted_price: number
  }
  
  export interface Details {
    specifications: Specifications
    course_outputs: CourseOutputs
  }
  
  export interface Specifications {
    course_level: string
    course_language: string
    course_type: string
    course_duration: string
    course_begin: string
    course_certificate: string
  }
  
  export interface CourseOutputs {
    [key: string]: {
      title: string
      description: string
    }
  }
  
  
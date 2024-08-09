export interface CategoryResponseType {
  id: string;
  name: string;
  created_at: Date;
}

// Define a type for the document object
export interface DocumentResponseType {
  id: string;
  name: string;
  is_trained: boolean;
  categories: CategoryResponseType[];
  created_at: string; // ISO 8601 string
  updated_at: string; // ISO 8601 string
}

export type ListResponse<T> = {
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  data: T | null;
};

export interface UrlResponseType {
  id: string;
  title: string;
  url: string;
  is_trained: boolean;
  categories: CategoryResponseType[];
  created_at: string; // ISO 8601 string
  updated_at: string; // ISO 8601 string
}

// Define a type for the paginated response
export interface PaginatedUrlResponseType {
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  data: UrlResponseType[];
}

export interface FaqResponseType {
  id: string;
  question: string;
  answer: string;
  is_trained: boolean;
  categories: CategoryResponseType[];
  created_at: string; // ISO 8601 string
  updated_at: string; // ISO 8601 string
}

// Define a type for the paginated response
export interface PaginatedFaqResponseType {
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  data: FaqResponseType[];
}

export interface AdvisorCreateType {
  bot_title: string;
  welcome_message: string;
  greeting_message: string;
  bot_engine: string;
  knowledge_urls: string[];
  knowledge_documents: string[];
  knowledge_faqs: string[];
  call_to_actions: string;
  quick_questions: string[];
}

export interface AdvisorResponseType {
  id: string;

  bot_title: string;
  welcome_message: string;
  greeting_message: string;
  bot_engine: string;
  knowledge_urls: ListResponse<UrlResponseType[]>;
  knowledge_documents: ListResponse<DocumentResponseType[]>;
  knowledge_faqs: ListResponse<FaqResponseType[]>;
  call_to_actions: string;
  quick_questions: string[];
  created_at: string;
  updated_at: string;
}

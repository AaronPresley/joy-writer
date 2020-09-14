export interface EventResponse<T> {
  errors: string[] | null;
  data: T;
}

interface UseFetchOptions<T> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown>;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

interface UseFetchSuccessResponse<T> {
  data: T;
  ok: true;
}

interface UseFetchErrorResponse {
  error: string;
  ok: false;
}

type UseFetchResponse<T> = UseFetchSuccessResponse<T> | UseFetchErrorResponse;

export const useFetch = <T = unknown>() => {
  return async (url: string, options: UseFetchOptions<T>): Promise<UseFetchResponse<T>> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: options.method ?? 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options.body),
    });

    const data = await response.json();

    if (response.ok) {
      options.onSuccess?.(data);

      return {
        data,
        ok: true,
      } as UseFetchSuccessResponse<T>;
    } else {
      options.onError?.(data.error);

      return {
        error: data.error || 'Unknown error',
        ok: false,
      } as UseFetchErrorResponse;
    }
  };
};

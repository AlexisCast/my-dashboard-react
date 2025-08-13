import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  });

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    });
  };

  const getFetch = async () => {
    setLoadingState();

    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      });

      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    });
    console.log({ data });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasHerror: state.hasError
  };

  // Manage cache
};

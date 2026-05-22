import { useEffect, useState, useRef } from 'react';

export const useWebSocket = (url) => {
  const [data, setData] = useState({
    temperature: null,
    humidity: null,
    light: null,
  });

  const ws = useRef(null);

  useEffect(() => {
    // WebSocket bağlantısı açılıyor
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        // parsed = { temperature: 24, humidity: 60, light: 300 }
        setData(parsed);
      } catch (error) {
        console.error('WebSocket parse error', error);
      }
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error', error);
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.current.close();
    };
  }, [url]);

  return data;
};
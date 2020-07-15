import { useState, useEffect, useRef } from "react";
import { database_query } from "../services/database";
import Axios from "axios";
import { CONSTANT } from "../env";

interface ApiConfig {
  fullResponse?: boolean;
  autoFetch?: boolean;
  isPublic?: boolean;
}

export function useGet(
  endpoint: string,
  defaultValue: any = null,
  apiconfig: ApiConfig = {
    fullResponse: false,
    autoFetch: true,
    isPublic: false,
  }
) {
  const mounted = useRef(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (apiconfig.autoFetch) fetch();

    return () => {
      mounted.current = false;
    };
  }, []);

  const fetch = async () => {
    setLoading(true);
    const token = await database_query("token");
    Axios.interceptors.request.use((config) => {
      if (!apiconfig.isPublic) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    try {
      const res = await Axios.get(CONSTANT.API.HOST + endpoint);
      setError(null);
      setLoading(false);
      setData(
        apiconfig.fullResponse ? res : res.data["hydra:member"] ?? res.data
      );
      return apiconfig.fullResponse
        ? res
        : res.data["hydra:member"] ?? res.data;
    } catch (err) {
      setError(err);
      return null;
    }
  };

  return { loading, data, error, fetch };
}

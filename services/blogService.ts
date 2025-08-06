import { useState, useEffect, useCallback } from "react";

interface BlogPost {
  title: string;
  link: string;
  creationDate: string;
  blogPhoto?: string;
}

interface RSSFeedData {
  feedTitle: string;
  feedDescription: string;
  posts: BlogPost[];
}

interface UseRSSFeedState {
  data: RSSFeedData | null;
  loading: boolean;
  error: string | null;
}

import { XMLParser } from 'fast-xml-parser';

/**
 * Parse le contenu XML RSS WordPress
 */
export function parseWordPressRSS(rssXmlContent: string): RSSFeedData {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    allowBooleanAttributes: true,
    trimValues: true,
    parseTagValue: true,
    parseAttributeValue: true,
  });

  const jsObj = parser.parse(rssXmlContent);
  const channel = jsObj.rss?.channel || jsObj.channel;
  if (!channel) throw new Error('Aucun canal trouvé dans le flux RSS');

  const feedTitle = channel.title || '';
  const feedDescription = channel.description || '';
  let items = channel.item || [];
  if (!Array.isArray(items)) items = [items];

  const posts: BlogPost[] = items.map((item: any) => {
    const title = item.title || '';
    const link = item.link || '';
    const pubDate = item.pubDate || '';
    const creationDate = pubDate ? new Date(pubDate).toISOString() : '';
    let blogPhoto: string | undefined;

    // 1. content:encoded
    let contentEncoded = item['content:encoded'] || '';
    if (typeof contentEncoded === 'object' && contentEncoded['#text']) contentEncoded = contentEncoded['#text'];
    if (contentEncoded) {
      const imgMatch = contentEncoded.match(/<img[^>]*src=["']([^"']+)["']/i);
      if (imgMatch && imgMatch[1]) blogPhoto = imgMatch[1];
    }

    // 2. description
    if (!blogPhoto && item.description) {
      const desc = item.description;
      const imgMatch = desc.match(/<img[^>]*src=["']([^"']+)["']/i);
      if (imgMatch && imgMatch[1]) blogPhoto = imgMatch[1];
    }

    // 3. media:content
    if (!blogPhoto && item['media:content'] && item['media:content'].url) {
      blogPhoto = item['media:content'].url;
    }
    // Sometimes media:content is an array
    if (!blogPhoto && Array.isArray(item['media:content'])) {
      const mediaItem = item['media:content'].find((mc: any) => mc.url);
      if (mediaItem && mediaItem.url) blogPhoto = mediaItem.url;
    }

    // 4. enclosure
    if (!blogPhoto && item.enclosure && item.enclosure.url) {
      blogPhoto = item.enclosure.url;
    }
    // Sometimes enclosure is an array
    if (!blogPhoto && Array.isArray(item.enclosure)) {
      const encItem = item.enclosure.find((enc: any) => enc.url);
      if (encItem && encItem.url) blogPhoto = encItem.url;
    }

    // Optionally, fallback: try to find any image URL in any string field
    if (!blogPhoto) {
      for (const key of ['content:encoded', 'description']) {
        const val = item[key];
        if (typeof val === 'string') {
          const anyImg = val.match(/https?:\/\/[^\s"']+\.(jpg|jpeg|png|gif|webp)/i);
          if (anyImg && anyImg[0]) {
            blogPhoto = anyImg[0];
            break;
          }
        }
      }
    }

    return {
      title: title.trim(),
      link: link.trim(),
      creationDate,
      blogPhoto,
    };
  });

  return {
    feedTitle,
    feedDescription,
    posts,
  };
}

/**
 * Hook React pour récupérer et parser un flux RSS
 * @param rssUrl - URL du flux RSS
 * @param autoFetch - Récupérer automatiquement au montage (défaut: true)
 * @returns État du flux RSS avec méthode de refetch
 */
export function useRSSFeed(rssUrl: string, autoFetch: boolean = true) {
  const [state, setState] = useState<UseRSSFeedState>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchWithProxy = useCallback(async (url: string): Promise<string> => {
    const proxies = [
      "https://api.allorigins.win/raw?url=",
      "https://corsproxy.io/?",
      "https://api.codetabs.com/v1/proxy?quest=",
    ];

    let lastError: Error | null = null;

    for (const proxy of proxies) {
      try {
        const response = await fetch(proxy + encodeURIComponent(url));

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        return await response.text();
      } catch (error) {
        lastError = error as Error;
        console.warn(`Proxy ${proxy} échoué:`, error);
        continue;
      }
    }

    throw lastError || new Error("Tous les proxies CORS ont échoué");
  }, []);

  const fetchRSSFeed = useCallback(async () => {
    if (!rssUrl) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const rssContent = await fetchWithProxy(rssUrl);
      const parsedData = parseWordPressRSS(rssContent);

      setState({
        data: parsedData,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  }, [rssUrl, fetchWithProxy]);

  useEffect(() => {
    if (autoFetch) {
      fetchRSSFeed();
    }
  }, [autoFetch, fetchRSSFeed]);

  return {
    ...state,
    refetch: fetchRSSFeed,
  };
}

/**
 * Hook pour utiliser votre propre endpoint serveur
 * @param rssUrl - URL du flux RSS
 * @param serverEndpoint - Votre endpoint serveur
 * @param autoFetch - Récupérer automatiquement au montage
 */
export function useRSSFeedWithServer(
  rssUrl: string,
  serverEndpoint: string = "/api/rss-proxy",
  autoFetch: boolean = true
) {
  const [state, setState] = useState<UseRSSFeedState>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchRSSFeed = useCallback(async () => {
    if (!rssUrl) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(
        `${serverEndpoint}?url=${encodeURIComponent(rssUrl)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rssContent = await response.text();
      const parsedData = parseWordPressRSS(rssContent);

      setState({
        data: parsedData,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  }, [rssUrl, serverEndpoint]);

  useEffect(() => {
    if (autoFetch) {
      fetchRSSFeed();
    }
  }, [autoFetch, fetchRSSFeed]);

  return {
    ...state,
    refetch: fetchRSSFeed,
  };
}

/**
 * Hook avec cache local pour éviter les requêtes répétées
 */
export function useRSSFeedWithCache(
  rssUrl: string,
  cacheKey: string,
  cacheDuration: number = 5 * 60 * 1000
) {
  const [state, setState] = useState<UseRSSFeedState>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchWithProxy = useCallback(async (url: string): Promise<string> => {
    const proxies = [
      "https://api.allorigins.win/raw?url=",
      "https://corsproxy.io/?",
    ];

    for (const proxy of proxies) {
      try {
        const response = await fetch(proxy + encodeURIComponent(url));
        if (response.ok) {
          return await response.text();
        }
      } catch (error) {
        continue;
      }
    }

    throw new Error("Impossible de récupérer le flux RSS");
  }, []);

  const fetchRSSFeed = useCallback(async () => {
    if (!rssUrl) return;

    // Vérifier le cache
    const cacheData = localStorage.getItem(cacheKey);
    const cacheTime = localStorage.getItem(`${cacheKey}_time`);

    if (cacheData && cacheTime) {
      const age = Date.now() - parseInt(cacheTime);
      if (age < cacheDuration) {
        setState({
          data: JSON.parse(cacheData),
          loading: false,
          error: null,
        });
        return;
      }
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const rssContent = await fetchWithProxy(rssUrl);
      const parsedData = parseWordPressRSS(rssContent);

      // Sauvegarder en cache
      localStorage.setItem(cacheKey, JSON.stringify(parsedData));
      localStorage.setItem(`${cacheKey}_time`, Date.now().toString());

      setState({
        data: parsedData,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  }, [rssUrl, cacheKey, cacheDuration, fetchWithProxy]);

  useEffect(() => {
    fetchRSSFeed();
  }, [fetchRSSFeed]);

  return {
    ...state,
    refetch: fetchRSSFeed,
    clearCache: () => {
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(`${cacheKey}_time`);
    },
  };
}

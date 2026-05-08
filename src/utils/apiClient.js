const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

function normalizeBaseUrl(url) {
  return url.replace(/\/+$/, '');
}

function normalizePath(path) {
  return path.replace(/^\/+/, '');
}

function buildApiUrl(path) {
  const base = normalizeBaseUrl(API_BASE_URL);
  const normalizedPath = normalizePath(path);

  if (base.endsWith('/api')) {
    const pathWithoutApi = normalizedPath.replace(/^api\/?/i, '');
    return `${base}/${pathWithoutApi}`;
  }

  return `${base}/${normalizedPath}`;
}

export { API_BASE_URL, buildApiUrl };
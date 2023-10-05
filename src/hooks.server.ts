import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Check for theme in local storage first

  // if not in local storage, grab from system preferences

  // if neither, set default theme

  const theme = event.cookies.get('theme') || 'light';

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace(`data-theme=""`, `data-theme="${theme}"`)
  });

  return response;
}
export const load = async ({ cookies }) => {
  const theme = await cookies.get('theme');
  return {
    theme
  }
};
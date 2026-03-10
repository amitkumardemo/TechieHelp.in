export const slugifyEmployee = (name, role) => {
  const base = `${name} ${role} techiehelp`;
  return base
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-alphanumeric (except space/hyphen)
    .replace(/[\s_-]+/g, '-') // Replace spaces/underscores/hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

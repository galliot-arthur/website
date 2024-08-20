export const getSource = (path: string | string[]) =>
  `/pictures/${Array.isArray(path) ? path[0] : path}`;

export const share = (path: string) => {
  navigator.clipboard.writeText(
    window.location.host + "/#" + path.replaceAll(" ", "%20")
  );
};

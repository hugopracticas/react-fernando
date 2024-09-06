export const getImagen = async () => {
  try {
    const apiKey = "CkXVMDjA6z1EBfUXn00abYsI9J8R4HmO";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    console.error(error);
    return "No se encontro la imagen";
  }
};

getImagen();

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5bd807c0267129d25d13ef5809f36544',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
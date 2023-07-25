const env = {
    apiHost: process.env.NEXT_PUBLIC_API_HOST,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    baseURL: process.env.NEXT_PUBLIC_API_HOST + process.env.NEXT_PUBLIC_BASE_PATH,
    imageHost: process.env.NEXT_PUBLIC_IMAGE_HOST,
    imagePath: process.env.NEXT_PUBLIC_IMAGE_PATH,
    imageBaseURL: process.env.NEXT_PUBLIC_IMAGE_HOST + process.env.NEXT_PUBLIC_IMAGE_PATH,
    perPage: parseInt(process.env.NEXT_PUBLIC_PER_PAGE)
}

export default env

const devMode = false

export const config = {
    baseUrl: devMode ? process.env.NEXT_PUBLIC_DEV_BASE_URL : process.env.NEXT_PUBLIC_BASE_URL
}
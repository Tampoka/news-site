const devMode = true

export const config = {
    baseUrl: devMode ? process.env.REACT_APP_DEV_BASE_URL : process.env.REACT_APP_BASE_URL
}
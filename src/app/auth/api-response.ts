export interface ApiResponse {
    success?: boolean,
    code?: number,
    message?: string,
    data?: {
        firstName: string,
        lastName: string,
        email: string,
        status: string,
        id: string,
        access_token: string,
        refresh_token: string
    }
}
export const getResponse = (body = {}, code = 200, headerParam = {}) => {
    return {
        statusCode: code,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            ...headerParam
        }
    }
}
const HTTP_GET = 'GET'
const HTTP_POST = 'POST'

export const postData = async (route, httpMethod, data) => {
    const result = await fetch(route, {
        method: httpMethod,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    
    const json = await result.json()
    if (json){
        return json
    } else{
        return Promise.reject(json.error)
    }
}


import axios from 'axios'
const HTTP_GET = 'GET'
const HTTP_POST = 'POST'

export const postData = async (route, body) => {
    return axios({
        method: 'POST',
        url: route,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        data: body
    })
    .catch(err => console.log(err))
}


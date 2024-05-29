export default function({ $axios, store, $cookies, redirect }) {
    $axios.setBaseURL('http://localhost:8000/api')
    $axios.onRequest(() => {
        $axios.setHeader('test')
    })
    $axios.onResponse(function(response) {
        try {
            return response;
        } catch (err) {
            return Promise.reject(err.message)
        }
    })
}
import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    iterations: 1,
}

export default function () {
    const url = 'http://localhost:3000/login'

    const payload = JSON.stringify({
        username: 'daiane.obelar',
        senha: '123456',
    })

    const params = {
        headers: {
            'Content-Type' : 'application/json',
        },
    }
    const resposta = http.post(url, payload, params)
    console.log(resposta)

}
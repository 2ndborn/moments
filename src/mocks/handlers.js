const baseURL = "https://restdemo-a68cc29b2722.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (rest, res, ctx) => {
        return res(ctx.json())
    })
];
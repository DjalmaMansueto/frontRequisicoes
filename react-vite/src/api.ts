
export const api = {

    CarregarTodosUsuarios: async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let json = await response.json();
        return json;
    },

     CarregarUsuarioUnico: async (Param: string) => {
         let response = await fetch('https://jsonplaceholder.typicode.com/todos' + Param);
         let json = await response.json();
         return json;
     },
     AdicionarUsuarios: async (title: string, body: string, userId: number) => {
     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify
        ({
            title,
            body,
            userId
        }),
        headers: {
            "Content-Type" : "application/json"
        }    

     });

     let json =await response.json();
     console.log(json);
     return json;
    }
};
